import { ethers } from "hardhat";
import React, { useState } from "react";
import converter from "./converter.json";

const Body = ({ accounts }) => {
  const [Name, Setname] = useState();
  const [Price, Setprice] = useState();

  const Eth_address = '0x0f3Df9c6b4A16B73707c428ab6d252F5e57Ed61e';
  let EthAmount;
  let finalUSDT;
  
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
      }
      catch (err) {
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
      <button onClick={changer}>Convert</button>
      <h1>
        {Name}
        {Price}
      </h1>
    </div>
  );
};

export default Body;
