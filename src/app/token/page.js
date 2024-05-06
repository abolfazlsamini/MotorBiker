"use client";
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";

export default function Coins() {
  return (
    <>
      <title>Token</title>
      <Navbar />
      <div className="justify-center flex">
        <div className="relative w-full" style={{ backgroundColor: "#0d0d0d" }}>
          <div className="bg absolute p-0 sm:top-0 sm:bottom-0 sm:left-0 sm:right-0"></div>
          <div className="text-center text-slate-50 pt-12 pb-20 pl-1/5 pr-1/5 sm:pt-32 sm:pb-20 sm:pr-8 sm:pl-8 sm:mt-0 sm:mb-0 sm:ml-auto sm:mr-auto relative max-w-900 ">
            <div className="flex flex-row justify-center">
              <div className="relative w-7 h-87 xl:w-10 xl:h-10">
                <Image src="/coinicon.svg" fill alt="coin"></Image>
              </div>
              <span className="xl:text-4xl">ANREX</span>
            </div>
            <div
              className="text-transparent text-3xl xl:text-7xl pt-5 font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #D6FF5B 25.33%, #14FEC6 101.06%)",
                backgroundClip: "text",
              }}
            >
              Verify your account balance
            </div>
            <div className="xl:text-2xl pt-5">
              View your existing AnrexToken balance and those nearing expiration
            </div>
            <div className="xl:text-2xl pt-5">
              <button
                type="button"
                className="inline-block rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                log in to find out
              </button>
            </div>
            <div className="xl:text-2xl pt-5">
              Each AnrexToken you accrue remains valid for a period of 2 years
              from the date of acquisition. When redeeming Units, those acquired
              earliest will be utilized initially. For additional details, refer
              to the FAQ section
            </div>
            <div className="xl:text-2xl pt-5 pb-5">
              Regulations vary depending on the country. If your&#39;e situated
              in Canada,
              <br />
              <a className="text-ubiblue" href="#">
                you can find further details by clicking here.
              </a>
            </div>
            <div
              className="text-transparent text-3xl xl:text-7xl pt-5 font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #D6FF5B 25.33%, #14FEC6 101.06%)",
                backgroundClip: "text",
              }}
            >
              Maximize your unit&#39;s potential
            </div>

            <div className="xl:text-2xl pt-5">
              Boost your gameplay, increase your rewards!
            </div>
            <div className="xl:text-2xl pt-5 pb-5">
              With each advancement in Anrex Connect, you&#39;ll accumulate
              AnrexTokenthat can be utilized for exclusive in-game rewards or
              discounts in the store.
            </div>
            <div className="flex flex-row justify-center">
              <div className="xl:text-2xl pt-5">
                <button
                  type="button"
                  className="inline-block rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Chek My game
                </button>
              </div>
              <div className="xl:text-2xl pt-5 pl-5">
                <button
                  type="button"
                  className="inline-block rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Login to AnrexConnect
                  {/* <div className="flex flex-row justify-center">
                    <div className="relative w-7 h-87 ">
                      <Image src="/coinicon.svg" fill alt="coin"></Image>
                    </div>
                    <span className="pr-2">100</span>
                  </div> */}
                </button>
              </div>
            </div>
            <div className="xl:text-2xl pt-5 pb-5">
              Learn more about our loyalty program&#160;
              <a className="text-ubiblue" href="#">
                here.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
