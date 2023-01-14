import React,{ useState} from "react";

const Body=()=>{
  const [Name, Setname] = useState();
  const [Price, Setprice] = useState();

  let EthAmount;
  let finalUSDT;

  const changed = (event) => {
    EthAmount = event.target.value;
  };

  const changer = () => {
      Setname("The current price of ETH in USDT is :");
      Setprice("0");
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
}

export default Body;
