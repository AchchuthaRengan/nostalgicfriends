import { web3, contract, successMessage } from "../../lib/web3";

const handleError = (res) => {
  res.status(403).json({ url: null });
};

//nostalgicfriends files hosted on ipfs (pinata)
const handleDownload = (res) => {
  res.status(200).json({
    url: "https://ipfs.io/ipfs/QmRoDwy9epUqkunryBoGLEHjnLaUZ6dJbSWPbSp3iMavkE",
  });
};

export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);
    if (!body.signature) {
      handleError(res);
    }

    const account = web3.eth.accounts.recover(successMessage, body.signature);

    contract.methods
      .handleCheckUser()
      .call({ from: account })
      .then(function (data) {
        if (data) {
          handleDownload(res);
        } else {
          handleError(res);
        }
      });

  } catch (e) {
    handleError(e);
  }
  handleDownload(res);
}
