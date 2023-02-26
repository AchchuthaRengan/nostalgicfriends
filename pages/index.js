//import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useState } from "react";
import { contract, web3 } from "../lib/web3";

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

  //funchandlepurchase - purchase
  const handlePurchase = () => {

    handleConnect();

    if (accounts.length > 0) {

      try{
        const transaction = contract.methods.handlePurchase().send({
          from:accounts[0],
          valur:web3.utils.toWei("0.02","ether")
        });
        contract.methods
        .handleCheckUser()
        .call({ from: accounts[0] })
        .then(setHasAccess);
        contract.methods.checkSales().call().then(setCanBuy);
        contract.methods.totSales().call().then(setTotSales);
      }
      catch(e)
      {
        alert(e);
      }
      
    } else {
      setHasAccess(false);
      alert("Something Went Wrong");
    }

   

  };

  return (
    <>
      <main>
        <Hero handleConnect={handleConnect} handlePurchase={handlePurchase}/>
      </main>
    </>
  );
}
