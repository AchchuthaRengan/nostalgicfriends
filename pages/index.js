//import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useState } from "react";
import {web3} from "../lib/web3";

export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [canBuy, setCanBuy] = useState(false);
  const [totSales, setTotSales] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);

  //funchandleconnect - wallet connection
  const handleConnect = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(setAccounts);
  };



  return (
    <>
      <main>        
        <Hero handleConnect={handleConnect}/>
      </main>
    </>
  );
}
