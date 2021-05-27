import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { getAddress } from "@harmony-js/crypto";
import ENS from "@ensdomains/ensjs";
import { ETHRegistrarController } from "../out/ETHRegistrarController";
import { ReverseRegistrar } from "../out/ReverseRegistrar";
// import { PublicResolver } from "../out/PublicResolver";
const BN = require("bn.js");
// const { hash } = require("eth-ens-namehash");

interface IHmyMethodsInitParams {
  web3: Web3;
  ensAddress: string;
  nodeURL: string;
  options?: { gasPrice: number; gasLimit: number };
}

export class HmyMethodsWeb3 {
  public web3: Web3;
  public ens: typeof ENS;

  public registrarController: Contract;
  public reverseRegistrar: Contract;

  public ensAddress: string;
  public resolverAddress: string;
  public nodeURL: string;
  // private options = { gasPrice: 1000000000, gasLimit: 6721900 };
  public useMetamask = false;

  constructor(params: IHmyMethodsInitParams) {
    this.web3 = params.web3;
    this.ensAddress = params.ensAddress;
    this.nodeURL = params.nodeURL;

    const provider = new Web3.providers.HttpProvider(this.nodeURL);
    this.ens = new ENS({ provider, ensAddress: this.ensAddress });

    // if (params.options) {
    //   this.options = params.options;
    // }
  }

  init = async () => {
    const controllerAddress = await this.ens
      .name("controller.one")
      .getAddress();

    console.log("controllerAddress: ", controllerAddress);

    this.registrarController = new this.web3.eth.Contract(
      ETHRegistrarController.abi,
      controllerAddress
    );

    const reverseAddress = await this.ens.name("addr.reverse").getOwner();

    console.log("reverseAddress: ", reverseAddress);

    this.reverseRegistrar = new this.web3.eth.Contract(
      ReverseRegistrar.abi,
      reverseAddress
    );

    this.resolverAddress = await this.ens.name("resolver.one").getAddress();

    console.log("resolverAddress: ", this.resolverAddress);
  };

  setUseOneWallet = (value: boolean) => value;
  setUseMathWallet = (value: boolean) => value;

  setUseMetamask = (value: boolean) => (this.useMetamask = value);

  makeCommitment = async (
    domain: string,
    owner: string,
    duration: number,
    secret = "",
    address: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const ownerAddrHex = getAddress(owner).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.registrarController.methods
      .makeCommitmentWithConfig(
        domain,
        ownerAddrHex,
        secret,
        this.resolverAddress,
        address || account
      )
      .call();
  };

  register = async (
    domain: string,
    owner: string,
    duration: number,
    secret = "",
    address: string,
    sendTxCallback?: (hash: string) => void
  ) => {
    let accounts;
    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const ownerAddrHex = getAddress(owner).checksum;

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    const rentPrice = await this.rentPrice(domain, duration);

    const transaction = await this.registrarController.methods
      .registerWithConfig(
        domain,
        ownerAddrHex,
        duration,
        secret,
        this.resolverAddress,
        address || account
      )
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
        value: rentPrice,
      })
      .on("transactionHash", sendTxCallback ? sendTxCallback : () => {});

    return transaction;
  };

  commit = async (commitment: any, sendTxCallback?: (hash: string) => void) => {
    let accounts;

    if (this.useMetamask) {
      // @ts-ignore
      accounts = await ethereum.enable();
    }

    const account = this.useMetamask
      ? accounts[0]
      : this.web3.eth.defaultAccount;

    return await this.registrarController.methods
      .commit(commitment)
      .send({
        from: account,
        gasLimit: 6721900,
        gasPrice: new BN(await this.web3.eth.getGasPrice()).mul(new BN(1)),
      })
      .on("transactionHash", sendTxCallback ? sendTxCallback : () => {});
  };

  rentPrice = async (domain: string, duration: number) => {
    return await this.registrarController.methods
      .rentPrice(domain, duration)
      .call();
  };
}
