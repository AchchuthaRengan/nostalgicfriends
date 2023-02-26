import Web3 from "web3";
import NostalgicFriends from "./NostalgicFriends.json";

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545");

//contract from ganache
const contractAddress = "0x4Ab74F6036599ED538338858CBf62E798cb436db";
const contract = new web3.eth.Contract(NostalgicFriends.abi, contractAddress);

const successMessage =
  "Congratulations!, You are our Nostalgic Friend :). Your Purchase has been confirmed and ready to be downloaded.";

export { web3, contract, contractAddress, successMessage };
