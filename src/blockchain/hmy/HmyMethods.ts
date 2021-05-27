import { Harmony } from "@harmony-js/core";
import { Contract } from "@harmony-js/contract";
import { getAddress } from "@harmony-js/crypto";
import { connectToBrowserWallet } from "./helpers";
import { ETHRegistrarController } from "../out/ETHRegistrarController";
import { ReverseRegistrar } from "../out/ReverseRegistrar";
import ENS from "@ensdomains/ensjs";
import Web3 from "web3";

interface IHmyMethodsInitParams {
  hmy: Harmony;
  ensAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethods {
  public hmy: Harmony;
  public ens: typeof ENS;

  public registrarController: Contract;
  public reverseRegistrar: Contract;

  public ensAddress: string;
  public resolverAddress: string;
  public nodeURL: string;

  public options = { gasPrice: 1000000000, gasLimit: 6721900 };
  public useOneWallet = false;
  public useMathWallet = false;

  constructor(params: IHmyMethodsInitParams) {
    this.hmy = params.hmy;
    this.ensAddress = params.ensAddress;
    this.nodeURL = params.nodeURL;

    const provider = new Web3.providers.HttpProvider(this.nodeURL);
    this.ens = new ENS({ provider, ensAddress: this.ensAddress });

    if (params.options) {
      this.options = params.options;
    }
  }

  init = async () => {
    const controllerAddress = await this.ens
      .name("controller.one")
      .getAddress();

    console.log("controllerAddress: ", controllerAddress);

    this.registrarController = this.hmy.contracts.createContract(
      ETHRegistrarController.abi,
      controllerAddress
    );

    const reverseAddress = await this.ens.name("addr.reverse").getOwner();

    console.log("reverseAddress: ", reverseAddress);

    this.reverseRegistrar = this.hmy.contracts.createContract(
      ReverseRegistrar.abi,
      reverseAddress
    );

    this.resolverAddress = await this.ens.name("resolver.one").getAddress();

    console.log("resolverAddress: ", this.resolverAddress);
  };

  setUseMetamask = (value: boolean) => value;

  setUseOneWallet = (value: boolean) => {
    // @ts-ignore
    if (!window || !window.onewallet) {
      throw new Error("OneWallet extension is not found");
    }

    this.useOneWallet = value;
  };

  setUseMathWallet = (value: boolean) => {
    // @ts-ignore
    if (!window || !window.harmony) {
      throw new Error("Math Wallet extension is not found");
    }

    this.useMathWallet = value;
  };

  makeCommitment = async (
    domain: string,
    owner: string,
    duration: number,
    secret = "",
    address: string
  ) => {
    const ownerAddrHex = getAddress(owner).checksum;

    let addressHex = address ? getAddress(address).checksum : null;

    if (this.useOneWallet && !address) {
      // @ts-ignore
      let { address } = await window.onewallet.getAccount();
      addressHex = getAddress(address).checksum;
    }

    return await this.registrarController.methods
      .makeCommitmentWithConfig(
        domain,
        ownerAddrHex,
        secret,
        this.resolverAddress,
        addressHex
      )
      .call(this.options);
  };

  rentPrice = async (domain: string, duration: number) => {
    return await this.registrarController.methods
      .rentPrice(domain, duration)
      .call(this.options);
  };

  commit = async (commitment: any, sendTxCallback?: (hash: string) => void) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.useOneWallet) {
          await connectToBrowserWallet(
            // @ts-ignore
            window.onewallet,
            this.hmy,
            this.registrarController.wallet,
            null,
            reject
          );
        }

        const res = await this.registrarController.methods
          .commit(commitment)
          .send(this.options)
          .on("transactionHash", sendTxCallback ? sendTxCallback : () => {});
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  };

  register = async (
    domain: string,
    owner: string,
    duration: number,
    secret = "",
    address: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.useOneWallet) {
          await connectToBrowserWallet(
            // @ts-ignore
            window.onewallet,
            this.hmy,
            this.registrarController.wallet,
            null,
            reject
          );
        }

        const ownerAddrHex = getAddress(owner).checksum;

        const rentPrice = await this.rentPrice(domain, duration);

        const res = await this.registrarController.methods
          .registerWithConfig(
            domain,
            ownerAddrHex,
            duration,
            secret,
            this.resolverAddress,
            address
          )
          .send({
            ...this.options,
            value: rentPrice,
          })
          .on("transactionHash", sendTxCallback ? sendTxCallback : () => {});

        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  };
}
