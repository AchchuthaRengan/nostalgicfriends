//import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
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

  //funccheckaccess - user check
  const checkAccess = () => {
    if (accounts.length > 0) {
      contract.methods
        .handleCheckUser()
        .call({ from: accounts[0] })
        .then(setHasAccess);
    } else {
      setHasAccess(false);
    }
  };

  //funchandlecanbuy - permission user
  const handleCanBuy = async () => {
    contract.methods.checkSales().call().then(setCanBuy);
    contract.methods.totSales().call().then(setTotSales);
  };

  //funchandlepurchase - purchase
  const handlePurchase = () => {
    if (accounts.length > 0) {
      try {
        const transaction = contract.methods.handlePurchase().send({
          from: accounts[0],
          valur: web3.utils.toWei("0.02", "ether"),
        });
        checkAccess();
        handleCanBuy();
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Something Went Wrong");
    }
  };

  //funchandledownload - download file
  const handleDownload = async function () {
    if (accounts.length > 0) {
      //sign to approve the contract and download the product
      const signature = await web3.eth.personal.sign(
        successMessage,
        accounts[0]
      );
      try {
        const request = await fetch("/api/download", {
          method: "POST",
          body: JSON.stringify({ signature }),
        });

        const json = await request.json();
        window.location.href = json.url;
      } catch (e) {
        alert("Something Went Wrong :(");
      }
    } else {
      alert("Oops!, you must be logged in :(");
    }
  };

  useEffect(() => {
    window.ethereum.request({ method: "eth_accounts" }).then(setAccounts);
    window.ethereum.on("accountsChanged", setAccounts);
  }, []);

  useEffect(() => {
    checkAccess();
    handleCanBuy();
  }, [accounts]);

  return (
    <>
      <main>
        <Hero
          accounts={accounts}
          handleConnect={handleConnect}
          handlePurchase={handlePurchase}
          hasAccess={hasAccess}
          handleDownload={handleDownload}
          totSales={totSales}
          canBuy={canBuy}
        />
      </main>
    </>
  );
}
