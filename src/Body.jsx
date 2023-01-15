import { ethers } from "hardhat";
import React, { useState } from "react";
import converter from "../artifacts/contracts/converter.sol/converter.json";

const Eth_address = "0x0f3Df9c6b4A16B73707c428ab6d252F5e57Ed61e";

const Body = ({ accounts }) => {
  const [Name, Setname] = useState();
  const [Price, Setprice] = useState();

  let EthAmount;
  const isConnected = Boolean(accounts[0]);

  const changed = (event) => {
    EthAmount = event.target.value;
  };

  const changer = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(Eth_address, converter, provider);
      try {
        const response = await contract.getETHPrice(EthAmount);
        Setname("The current price of ETH in USDT is :");
        Setprice(response);
      } catch (err) {
        console.log("error", err);
      }
    }
  };
  return (
    <div className="App">
      <h1>Ethereum Price Converter</h1>
      <h2>Know the Current price of ETH in USDT</h2>
      <input
        type="text"
        placeholder="Enter the amount of eth you want to convert to usdt"
        onChange={changed}
      />
      <br />
      {isConnected ? (
        <>
          <button onClick={changer}>Convert</button>
          <h1>
            {Name}
            {Price}
          </h1>
        </>
      ) : (
        <h2>Please connect to the wallet</h2>
      )}
    </div>
  );
};

export default Body;
