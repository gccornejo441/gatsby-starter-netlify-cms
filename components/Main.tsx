import React from "react";
import Image from "next/image";
import Link from "next/link";





const BodyText = () => (
  <div>
    <div className="font-montserrat text-center md:text-left">
      <h2 className="text-gray-900 text-xl md:text-4xl font-semibold mb-10 lg:my-10 max-w-prose">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </h2>
      <p className="mx-5 md:mx-0 md:max-w-prose text-gray-900 md:text-lg md:pr-10 text-base">
        Suspendisse feugiat egestas quam at pulvinar. Integer ac nunc ac turpis
        pellentesque facilisis a a nibh. Donec sollicitudin dolor eu justo
        malesuada ultrices vitae at urna. Mauris eget condimentum erat.
      </p>
      <div className="mt-10">
        <Link href="#">
          <a className="font-montserrat rounded-md font-medium text-white bg-orange-500 hover:bg-orange-600 tracking-widest shadow-md shadow-gray-400 px-5 py-3">
            Prepurchase
          </a>
        </Link>
      </div>
    </div>
  </div>
);

const Main = () => {
  return (
    <>
      <div className="relative flex justify-center mt-20 lg:mt-0">
        <div className="w-[26%] hidden md:block"></div>
        <div className="bg-green-100 h-[39rem] lg:h-[34rem] w-full lg:w-[74%]"></div>
       
      </div>
      <div className="flex justify-center mb-40 md:mb-0 mt-28 md:mt-80 lg:my-40 px-5">
        
      </div>
      <div className="bg-green-100 flex justify-center pb-10 md:pb-0 lg:mb-40">
        <div className="px-5 md:px-10 xl:container">
          <h2 className="text-gray-900 text-4xl font-semibold my-10 max-w-prose">
            Foreclosure Prevention Services
          </h2>
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-20">
            <div className="bg-orange-100 rounded-xl lg:my-10 md:py-10 font-montserrat">
              <h3 className="px-10 text-2xl font-semibold py-10 text-orange-800">
                Forebearance
              </h3>
              <p className="px-10 xl:pl-10 xl:pr-20 pb-10 font-[500] text-orange-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                posuere odio commodo venenatis fermentum. Vestibulum.
              </p>
            </div>
            <div className="bg-orange-100 rounded-xl lg:my-10 md:py-10 font-montserrat">
              <h3 className="px-10 text-2xl font-semibold py-10 text-orange-800">
                Loan Modification
              </h3>
              <p className="px-10 xl:pl-10 xl:pr-20 pb-10 font-[500] text-orange-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                posuere odio commodo venenatis fermentum. Vestibulum.
              </p>
            </div>
            <div className="bg-orange-100 rounded-xl mb-10 lg:my-10 md:py-10 font-montserrat">
              <h3 className="px-10 text-2xl font-semibold py-10 text-orange-800">
                Short Sale
              </h3>
              <p className="px-10 xl:pl-10 xl:pr-20 pb-10 font-[500] text-orange-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                posuere odio commodo venenatis fermentum. Vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
