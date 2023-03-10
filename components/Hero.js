import Button from "./Button";
import NavBar from "./NavBar";

const Hero = ({ accounts, connect, buy, canBuy, hasAccess, download,totalSales }) => {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity={".3"}
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset="1" stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <NavBar />
      <main>      
        <div className="relative px-6 lg:px-8">        
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">          
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">            
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Phase 1 is Live on Opensea -{" "}
                <a
                  href="https://opensea.io/collection/nostalgicfriends"
                  target={"_blank"}
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Radios <span aria-hidden="true">&rarr;</span>
                </a>                
              </div>              
            </div>            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl leading-10">
                {hasAccess ? "We are Nostalgic Friends " : "Join Nostalgic Friends" }
                {console.log("has access : " +  hasAccess)}
              </h1>              
              <h2 className="text-2xl font-bold tracking-normal pt-4 text-gray-900 sm:text-2xl leading-10">{totalSales} / 100 sold</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Available over 10,000 NFTs. Released on regular intervals.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                30% of all revenue will go directly to the Charity Foundation in
                India
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  accounts={accounts}
                  connect={connect}
                  buy={buy}
                  canBuy={canBuy}
                  hasAccess={hasAccess}
                  download={download}
                />
                <a
                  href="https://nostalgicfriends.gq/"
                  target={"_blank"}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">???</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity={"0.3"}
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset="1" stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};
export default Hero;
