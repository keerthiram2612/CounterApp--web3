import Web3 from "web3";
import { ethers } from "ethers";
import counterdata from "./counter.json";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const Counter_Address = "0x990994ab8ec733fee35026E6F44F7b70B67Ac991";

const increment = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
  const cont = new ethers.Contract(Counter_Address, counterdata, signer);
  const myfun = await cont.inc();
  console.log(myfun);
};

const decrement = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
  const cont = new ethers.Contract(Counter_Address, counterdata, signer);
  const myfun = await cont.dec();
  console.log(myfun);
};

const getcount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
  const cont = new ethers.Contract(Counter_Address, counterdata, signer);
  const myfun = await cont.getcount();
  console.log(myfun);
};

export { increment, decrement, getcount };
