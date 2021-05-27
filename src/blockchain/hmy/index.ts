import Web3 from "web3";
import { HmyMethods } from "./HmyMethods";
import { HmyMethodsWeb3 } from "./HmyMethodsWeb3";
const { Harmony } = require("@harmony-js/core");
const { ChainType } = require("@harmony-js/utils");

export interface IHmyClient {
  methods: HmyMethodsWeb3 | HmyMethods;
  addWallet: (pk: string) => void;
  getUserAddress: () => string;
  setUseOneWallet: (value: boolean) => void;
  setUseMathWallet: (value: boolean) => void;
}

export interface IHmyClientParams {
  sdk?: "harmony" | "web3";
  nodeURL: string;
  chainId: number;
  ensAddress: string;
  gasLimit?: number;
  gasPrice?: number;
}

export const getHmyClient = async (
  params: IHmyClientParams
): Promise<IHmyClient> => {
  const hmy = new Harmony(
    // let's assume we deploy smart contract to this end-point URL
    params.nodeURL,
    {
      chainType: ChainType.Harmony,
      chainId: Number(params.chainId),
    }
  );

  // const hmyUserAccount = params.privateKey
  //   ? hmy.wallet.addByPrivateKey(params.privateKey)
  //   : await hmy.wallet.createAccount();

  // const hmyUserAccount = await hmy.wallet.createAccount();

  let userAddress: string;
  let methods: HmyMethodsWeb3 | HmyMethods;

  let nodeURL = params.nodeURL;

  // @ts-ignore
  if (typeof window === "object" && window.web3) {
    // @ts-ignore
    nodeURL = window.web3.currentProvider;
  }

  const web3 = new Web3(nodeURL);

  if (params.sdk === "web3") {
    methods = new HmyMethodsWeb3({
      web3,
      ensAddress: params.ensAddress,
      nodeURL: params.nodeURL,
    });

    await methods.init();
  } else {
    methods = new HmyMethods({
      hmy,
      ensAddress: params.ensAddress,
      nodeURL: params.nodeURL,
    });

    await methods.init();
  }

  return {
    methods,
    addWallet: async (privateKey: string) => {
      if (params.sdk === "web3") {
        const ethUserAccount = await web3.eth.accounts.privateKeyToAccount(
          privateKey
        );
        web3.eth.accounts.wallet.add(ethUserAccount);
        web3.eth.defaultAccount = ethUserAccount.address;

        userAddress = ethUserAccount.address;
      } else {
        const account = await hmy.wallet.addByPrivateKey(privateKey);
        userAddress = account.address;
      }
    },
    getUserAddress: () => userAddress,
    setUseOneWallet: (value: boolean) => {
      if (params.sdk === "web3") {
        methods.setUseMetamask(value);
      } else {
        methods.setUseOneWallet(value);
      }
    },
    setUseMathWallet: (value: boolean) => {
      if (params.sdk === "web3") {
        methods.setUseMetamask(value);
      } else {
        methods.setUseOneWallet(value);
      }
    },
  };
};
