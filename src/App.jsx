import React, { useState } from "react";
import "./App.css";
import Body from "./Body";
import Navbar from "./Navbar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Body accounts={accounts} />
    </>
  );
}

export default App;
