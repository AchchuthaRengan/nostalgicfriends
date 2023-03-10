const Button = function ({
  accounts,
  connect,
  buy,
  canBuy,
  hasAccess,
  download,
}) {  
  let button = (
    <button
    type="button"
      onClick={connect}      
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Buy Here
    </button>
  );
  if (accounts.length > 0) {
    if (hasAccess) {
      button = (
        <button onClick={download} type="button" className="animate-bounce rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
          Download
        </button>
      );
    } else if (canBuy) {
      button = (
        <button onClick={buy} type="button" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Buy for 0.02 ETH
        </button>
      );
    } else {
      button = (
        <button disabled type="button" className="px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gray-300 rounded focus:outline-none">
          Sold out
        </button>
      );
    }
  }  
  return button;
};

export default Button;
