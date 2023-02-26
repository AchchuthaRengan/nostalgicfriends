import Header from "../components/Header";
import { useState, useEffect } from "react";
import { web3, contract, successMessage } from "../lib/web3";
import Hero from "components/Hero";

export default function Home() {
  const [accounts, setAccounts] = useState([]);
  const [canBuy, setCanBuy] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [hasAccess, setHasAccess] = useState(false);

  //funchandleconnect - wallet connection
  const handleConnect = function () {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then(setAccounts);
  };

  //funccheckaccess - user check
  const checkAccess = function () {
    if (accounts.length > 0) {
      contract.methods
        .handleCheckUser()
        .call({ from: accounts[0] })
        .then(setHasAccess);
    } else {
      setHasAccess(false);
    }
  };

  //funccheckaccess - user check
  const fetchCanBuy = async function () {
    contract.methods.checkSales().call().then(setCanBuy);
    contract.methods.totSales().call().then(setTotalSales);
  };

  //funchandlecanbuy - permission user
  const handleBuy = async function () {
    if (accounts.length > 0) {
      try {
        const transaction = contract.methods.handlePurchase().send({
          from: accounts[0],
          value: web3.utils.toWei("0.02", "ether"),
        });
        checkAccess();
        fetchCanBuy();
      } catch (e) {
        alert(e.message);
      }
    } else {
      alert("Something Went Wrong :(");
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
      alert("must be logged in");
    }
  };

  useEffect(() => {
    window.ethereum.request({ method: "eth_accounts" }).then(setAccounts);
    window.ethereum.on("accountsChanged", setAccounts);
  }, []);

  useEffect(() => {
    // check access if we change accounts
    checkAccess();
    fetchCanBuy();
  }, [accounts]);

  return (                    
      <>
        <main>
          <div>
            <Header />
            <Hero
              accounts={accounts}
              connect={handleConnect}
              buy={handleBuy}
              canBuy={canBuy}
              hasAccess={hasAccess}
              download={handleDownload}
              totalSales={totalSales}
            />
          </div>
        </main>
      </>    
  );
}
