import { ethers } from "ethers";

const Navbar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);
  // here we are just requesting for the accounts to the meta mask and we get the number of accounts that exists to that account.
  // const connectAccount = async () => {
  // }
  async function connectAccount() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      //or
      //const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccounts(accounts);
    }
  }
  return (
    <div>
      {isConnected ? (
        <button>Connected</button>
      ) : (
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  );
};

export default Navbar;
