require("dotenv").config();
import { getHmyClient } from "./index";

const sleep = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

const testHmy = async () => {
  const hmyClient = await getHmyClient({
    sdk: "harmony",
    nodeURL: "https://api.s0.b.hmny.io",
    chainId: 2,
    ensAddress: "0x23ca23b6f2C40BF71fe4Da7C5d6396EE2C018e6A",
    gasLimit: 6721900,
  });

  await hmyClient.addWallet(process.env.PRIVATE_KEY);

  const myAddress = hmyClient.getUserAddress();

  console.log("myAddress: ", myAddress);

  const duration = 365 * 24 * 3600; // 1year
  const domain = "123456test";
  const owner = myAddress;
  const secret =
    "0xe6bcec774acd54b71bd49ca5570f4bae074e7d983cad8a3162b480219adecdea";

  console.log(
    "owner: ",
    await hmyClient.methods.ens.name(domain + ".one").getOwner()
  );
  console.log(
    "address: ",
    await hmyClient.methods.ens.name(domain + ".one").getAddress()
  );

  const rentPrice = await hmyClient.methods.rentPrice(domain, duration);

  console.log("1 - rentPrice: ", rentPrice / 1e18);

  const commitment = await hmyClient.methods.makeCommitment(
    domain,
    owner,
    duration,
    secret,
    myAddress
  );

  console.log("2 - commit: ", commitment);

  await hmyClient.methods.commit(commitment);

  console.log("3 - sleep 15 sec");

  await sleep(15);

  console.log("4 - register");

  const res = await hmyClient.methods.register(
    domain,
    owner,
    duration,
    secret,
    myAddress
  );

  console.log("5 - register result: ", res.status);

  console.log(
    "owner: ",
    await hmyClient.methods.ens.name(domain + ".one").getOwner()
  );
  console.log(
    "address: ",
    await hmyClient.methods.ens.name(domain + ".one").getAddress()
  );

  process.exit();
};

testHmy();
