import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import Carousel from "./carousel";

const Intro = () => {
  return (
    <div
      className=""
      style={{
        background: ` url(home/meteor1.avif) 0 100% / 30%, 
        url(home/meteor2.avif) bottom / 100%, 
        url(home/meteor3.avif) 100% 100% / 30%, 
        radial-gradient(50% 40.33% at 50% 45.76%, #0a1626 44.79%, 
          rgba(10, 22, 38, 0) 100%)`,
        backgroundRepeat: "no-repeat",
        fontFamily: "Roboto,sans-serif",
      }}
    >
      <div className="flex flex-col flex-wrap px-7 items-center lg:max-w-1080 w-full m-auto text-center text-ubiwhite">
        <h2
          className="text-4xl pb-2 lg:text-6xl font-bold "
          style={{
            color: "transparent",
            backgroundClip: "text",
            backgroundImage: "linear-gradient(90deg, #EB148A, #2824E6)",
          }}
        >
          Ardent players make games better
        </h2>
        <br />
        <div className="lg:text-2xl">
          Anrex Connect provides a comprehensive range of player services
          tailored for Anrex games on various platforms. Its primary goal is to
          create an optimal gaming environment where players can fully immerse
          themselves in their games and interact with fellow gamers, regardless
          of the device they use.
        </div>
        <br />
        <div className="lg:text-2xl">
          Available at no cost, Anrex Connect can be accessed on multiple
          devices and platforms. Whether you&apos;re on your PC, using a mobile app,
          or playing on consoles (directly through your games), you can easily
          log in using your&#160;
          <a className="text-blue-600 lg:text-2xl" href="#">
            Anrex Account
          </a>
          <div className="flex items-center pt-6 justify-center">
            <a className="" href="#">
              <div className="inline-block mx-2 md:w-145 w-95  ">
                <Image alt="" width={1000} height={1000} src="/home/link1.svg"></Image>
              </div>
            </a>
            <a href="#">
              <div className="inline-block mx-2 md:w-162 w-105 ">
                <Image alt="" width={1000} height={1000} src="/home/link2.svg"></Image>
              </div>
            </a>
            <a href="#">
              <div className="inline-block md:w-174 w-115">
                <Image alt="" width={1000} height={1000} src="/home/link3.png"></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex text-ubiwhite flex-wrap flex-row items-center mt-5 justify-center z-10 relative">
          <ul className="flex py-4">
            <li>
              <a
                className="hover:-translate-y-2 transition ease-in-out delay-50 w-44 h-44 px-4 md:w-65 md:h-15 block"
                href="#community"

                //         style={{
                //           transition: `1s all linear;
                // -webkit-transition: 1s all linear;
                // -moz-transition: 1s all linear;
                // -ms-transition: 1s all linear;
                // -o-transition: 1s all linear;`,
                //         }}
              >
                <div
                  style={{
                    borderRadius: "1rem",
                    height: "100%",
                    width: "100%",
                    border: "1px solid #333",
                    background: `radial-gradient(124.35% 210.93% at 100% 134.21%, #4d2814 0, rgba(79, 38, 23, .6) 26.72%, 
              rgba(96, 23, 54, 0) 72.51%, rgba(96, 23, 54, 0) 91.16%), #0a1626`,
                  }}
                >
                  <div className="flex text-center pt-4 h-full flex-col justify-between">
                    <svg
                      width="100%"
                      height="30%"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      className="upn-icon"
                    >
                      <path d="M21.622 42.603a14.225 14.225 0 00-3.219-.372C12.228 42.231 6 46.351 6 52.823 6 53.44 6.869 54 7.46 54c.59 0 1.458-.589 1.458-1.177 0-4.708 4.558-7.65 9.485-7.65.527 0 1.05.035 1.565.103a15.875 15.875 0 011.654-2.673zM56.32 54c-.84 0-1.68-.843-1.68-1.685 0-6.74-7.32-11.796-14.283-11.796-7.009 0-14.282 5.056-14.282 11.796 0 .843-.84 1.685-1.68 1.685s-1.68-.801-1.68-1.685c0-9.268 8.858-15.166 17.642-15.166C49.141 37.149 58 43.088 58 52.315c0 .843-.84 1.685-1.68 1.685-.091 0 .136 0 0 0zM18.038 26.049c3.171 0 5.472 2.32 5.472 5.516 0 3.197-2.3 5.517-5.472 5.517-3.17 0-5.472-2.32-5.472-5.517.033-3.197 2.334-5.516 5.472-5.516zm0-2.943c-4.624 0-8.39 3.797-8.39 8.46 0 4.662 3.766 8.458 8.39 8.458 4.625 0 8.39-3.796 8.39-8.459 0-4.662-3.765-8.459-8.39-8.459zM39.428 13.344c4.563 0 8.623 3.935 8.623 8.358s-4.06 8.359-8.623 8.359c-4.562 0-8.622-3.936-8.622-8.359.048-4.423 4.108-8.359 8.622-8.359zm0-3.344c-6.653 0-12.07 5.252-12.07 11.702s5.417 11.702 12.07 11.702c6.654 0 12.072-5.252 12.072-11.702S46.082 10 39.428 10z"></path>
                    </svg>

                    <div className="text-sm md:text-base">
                      A UNIFIED GAMING COMMUNITY
                    </div>
                    <svg
                      width="100%"
                      height="20%"
                      viewBox="0 0 16 16"
                      className="dropdown-icon pb-4"
                    >
                      <path
                        fill="currentColor"
                        d="M7.526 11.285l-0.003-0.004-5.842-5.741c-0.242-0.237-0.242-0.622 0-0.86s0.633-0.237 0.875 0l5.439 5.345 5.439-5.345c0.244-0.24 0.639-0.24 0.883 0s0.244 0.628 0 0.867l-5.874 5.773c-0.244 0.24-0.639 0.24-0.883 0-0.012-0.012-0.023-0.023-0.034-0.036z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                className="hover:-translate-y-2 transition ease-in-out delay-50 w-44 h-44 px-4 md:w-65 md:h-15  block"
                href="#rewards"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem",
                    border: "1px solid #333",
                    background: `radial-gradient(129.07% 148.58% at 82.47% 151.62%, #055971 0, rgba(5, 89, 113, 0) 100%),
                   linear-gradient(0deg, #0a1626, #0a1626), #242424`,
                  }}
                >
                  <div className="flex text-center pt-4 h-full flex-col justify-between">
                    <svg
                      width="100%"
                      height="30%"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      className="upn-icon"
                    >
                      <path d="M51.25 20.857H38.417l2.235-.448c3.076-.532 5.393-2.871 5.942-5.849a7.053 7.053 0 00-2.087-6.433C43.078 6.744 41.31 6 39.278 6c-.439 0-.933.053-1.373.106-3.076.532-5.493 2.872-6.042 5.849l-.495 2.659-.494-2.659c-.55-2.977-2.966-5.317-6.043-5.849C24.392 6 23.898 6 23.458 6c-1.977 0-4.358.798-5.786 2.18-1.758 1.701-2.527 4.094-2.088 6.434.55 2.977 3.425 5.263 6.5 5.795l2.124.448H12.75c-1.538 0-2.75 1.094-2.75 2.583v11.346c0 1.489 1.212 2.785 2.75 2.785V55.36c0 1.49 1.37 2.641 2.908 2.641h32.959c1.538 0 2.633-1.297 2.633-2.786V37.571c1.375 0 2.75-1.11 2.75-2.785V23.44c-.055-1.436-1.212-2.583-2.75-2.583zm-.917 13h-16.5v-9.286h16.5v9.286zm-14.625-18.5l.494-2.658c.22-1.223 1.264-2.233 2.527-2.445.165-.054.385-.054.604-.054a3.13 3.13 0 012.198.904 3.074 3.074 0 01.879 2.712c-.22 1.223-1.264 2.233-2.527 2.446l-4.45.797.275-1.701zm-15.625-1.464c-.164-.957.148-2.095.917-2.786.604-.585 1.69-.853 2.513-.853.22 0 .385 0 .604.053 1.264.212 2.307 1.223 2.527 2.446l.495 2.658.33 1.648-4.45-.797c-1.319-.213-2.716-1.146-2.936-2.37zM13.667 24.57h16.5v9.286h-16.5v-9.286zm2.75 13h13.75v16.715h-13.75V37.57zm31.166 16.715h-13.75V37.57h13.75v16.715z"></path>
                    </svg>
                    <div className="text-sm md:text-base">
                      OUR LOYALTY REWARDS
                    </div>
                    <svg
                      width="100%"
                      height="20%"
                      viewBox="0 0 16 16"
                      className="dropdown-icon pb-4"
                    >
                      <path
                        fill="currentColor"
                        d="M7.526 11.285l-0.003-0.004-5.842-5.741c-0.242-0.237-0.242-0.622 0-0.86s0.633-0.237 0.875 0l5.439 5.345 5.439-5.345c0.244-0.24 0.639-0.24 0.883 0s0.244 0.628 0 0.867l-5.874 5.773c-0.244 0.24-0.639 0.24-0.883 0-0.012-0.012-0.023-0.023-0.034-0.036z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <ul className="flex py-4">
            <li>
              <a
                className="hover:-translate-y-2 transition ease-in-out delay-50 w-44 h-44 px-4 md:w-65 md:h-15  block"
                href="#guidance"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid #333",
                    borderRadius: "1rem",
                    background: `radial-gradient(137.27% 166.6% at 36.9% 160.32%, #1b4b3a 0, rgba(27, 75, 67, 0) 100%), 
              linear-gradient(0deg, #0a1626, #0a1626), #242424`,
                  }}
                >
                  <div className="flex text-center pt-4 h-full flex-col justify-between">
                    <svg
                      width="100%"
                      height="30%"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      className="upn-icon"
                    >
                      <path d="M55.5 12h-15c-1.4 0-2.5 1.1-2.5 2.5V22H24.5c-1.4 0-2.5 1.1-2.5 2.5V32H8.5C7.1 32 6 33.1 6 34.5v15C6 50.9 7.1 52 8.5 52h15c.15 0 .35 0 .5-.05.15.05.3.05.5.05h15c.2 0 .35 0 .5-.05.15.05.35.05.5.05h15c1.4 0 2.5-1.1 2.5-2.5v-35c0-1.35-1.1-2.5-2.5-2.5zM10 36h12v12H10V36zm28 12H26V34.5 26h12v22zm16 0H42V16h12v32z"></path>
                    </svg>
                    <div className="text-sm md:text-base">
                      ANALYTICS AND GUIDANCE
                    </div>
                    <svg
                      width="100%"
                      height="20%"
                      viewBox="0 0 16 16"
                      className="dropdown-icon pb-4"
                    >
                      <path
                        fill="currentColor"
                        d="M7.526 11.285l-0.003-0.004-5.842-5.741c-0.242-0.237-0.242-0.622 0-0.86s0.633-0.237 0.875 0l5.439 5.345 5.439-5.345c0.244-0.24 0.639-0.24 0.883 0s0.244 0.628 0 0.867l-5.874 5.773c-0.244 0.24-0.639 0.24-0.883 0-0.012-0.012-0.023-0.023-0.034-0.036z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>{" "}
            <li>
              <a
                className="hover:-translate-y-2 transition ease-in-out delay-50  w-44 h-44 px-4 md:w-65 md:h-15 block"
                href="#enhance"
              >
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #333",
                    height: "100%",
                    borderRadius: "1rem",
                    background: `radial-gradient(125.54% 181.78% at 0 173.28%, rgba(113, 5, 70, .8) 0, rgba(113, 5, 57, 0) 100%), 
              linear-gradient(0deg, #0a1626, #0a1626), #242424`,
                  }}
                >
                  <div className="flex text-center pt-4 h-full flex-col justify-between">
                    <svg
                      width="100%"
                      height="30%"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      className="upn-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.807 24.427c-1.419 0-2.62 1.177-2.62 2.68v18.26c0 4.691 3.751 8.45 8.317 8.45 4.564 0 8.309-3.756 8.309-8.45v-18.26c0-1.503-1.201-2.68-2.62-2.68H26.807zM20 27.107c0-3.762 3.023-6.863 6.807-6.863h11.386c3.784 0 6.807 3.101 6.807 6.863v18.26C45 52.315 39.437 58 32.504 58 25.574 58 20 52.317 20 45.368v-18.26z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.928 12.798c-.02-.023-.068-.096-.068-.267V7.16a1.16 1.16 0 10-2.32 0v5.37c0 .614.207 1.249.595 1.738.393.497.986.854 1.729.85h10.991c.02.024.072.098.072.273v.78c0 .175-.051.25-.072.273h-4.25c-.74 0-1.331.358-1.725.854a2.838 2.838 0 00-.595 1.74v1.21a1.16 1.16 0 102.32 0v-1.21c0-.174.052-.248.072-.272v-.001h4.25c.74 0 1.331-.357 1.725-.854.388-.489.595-1.123.595-1.74v-.78c0-.616-.207-1.25-.595-1.74-.394-.496-.985-.854-1.725-.854H26.928z"
                      ></path>
                      <path d="M30.577 28.574c0-1.049.86-1.899 1.923-1.899 1.062 0 1.923.85 1.923 1.899v5.695c0 1.049-.86 1.899-1.923 1.899-1.062 0-1.923-.85-1.923-1.899v-5.695z"></path>
                    </svg>
                    <div className="text-sm md:text-base">
                      INTRODUCING THE ANREX CONNECT DESKTOP APP
                    </div>
                    <svg
                      width="100%"
                      height="20%"
                      viewBox="0 0 16 16"
                      className="dropdown-icon pb-4"
                    >
                      <path
                        fill="currentColor"
                        d="M7.526 11.285l-0.003-0.004-5.842-5.741c-0.242-0.237-0.242-0.622 0-0.86s0.633-0.237 0.875 0l5.439 5.345 5.439-5.345c0.244-0.24 0.639-0.24 0.883 0s0.244 0.628 0 0.867l-5.874 5.773c-0.244 0.24-0.639 0.24-0.883 0-0.012-0.012-0.023-0.023-0.034-0.036z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-ubiblack2 ">
          <Carousel />
          <Intro />
          <div
            className="main_content"
            // style={{
            //   background: `linear-gradient(0deg, #0d0d0d 1.55%, rgba(13, 13, 13, 0) 11.08%), linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 8.3%), #0a1626`,
            // }}
          >
            <div
              id="community"
              className="relative portrait:py-10 landscape:py-20"
              //       style={{
              //         background: `linear-gradient(0deg, #0d0d0d 1.55%, rgba(13, 13, 13, 0) 11.08%),
              // linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 8.3%), #0a1626`,
              //       }}
            >
              <div
                style={{
                  background: `linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 23.87%), 
          radial-gradient(100.72% 66.36% at left center, #4d2814 0, rgba(79, 38, 23, .6) 26.72%, 
          rgba(96, 23, 54, 0) 72.51%)`,
                }}
                className="main_gradient absolute bottom-0 left-0 right-0 w-full"
              ></div>
              <div className="flex flex-wrap justify-center">
                <div className="flex flex-col sm:flex-row portrait:flex-col m-auto justify-center w-100 items-center ">
                  <div className="relative flex w-full landscape:pl-5 justify-center my-auto">
                    <Image alt=""
                      width={1000}
                      height={1000}
                      src="/home/Anrex Connect Homepage.png"
                    />
                  </div>
                  <div className="w-full relative landscape:pl-4 landscape:pr-12 px-4 text-ubiwhite">
                    <div className="flex py-2 justify-start items-center">
                      <span>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 64 64"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="upn-icon"
                        >
                          <path d="M21.622 42.603a14.225 14.225 0 00-3.219-.372C12.228 42.231 6 46.351 6 52.823 6 53.44 6.869 54 7.46 54c.59 0 1.458-.589 1.458-1.177 0-4.708 4.558-7.65 9.485-7.65.527 0 1.05.035 1.565.103a15.875 15.875 0 011.654-2.673zM56.32 54c-.84 0-1.68-.843-1.68-1.685 0-6.74-7.32-11.796-14.283-11.796-7.009 0-14.282 5.056-14.282 11.796 0 .843-.84 1.685-1.68 1.685s-1.68-.801-1.68-1.685c0-9.268 8.858-15.166 17.642-15.166C49.141 37.149 58 43.088 58 52.315c0 .843-.84 1.685-1.68 1.685-.091 0 .136 0 0 0zM18.038 26.049c3.171 0 5.472 2.32 5.472 5.516 0 3.197-2.3 5.517-5.472 5.517-3.17 0-5.472-2.32-5.472-5.517.033-3.197 2.334-5.516 5.472-5.516zm0-2.943c-4.624 0-8.39 3.797-8.39 8.46 0 4.662 3.766 8.458 8.39 8.458 4.625 0 8.39-3.796 8.39-8.459 0-4.662-3.765-8.459-8.39-8.459zM39.428 13.344c4.563 0 8.623 3.935 8.623 8.358s-4.06 8.359-8.623 8.359c-4.562 0-8.622-3.936-8.622-8.359.048-4.423 4.108-8.359 8.622-8.359zm0-3.344c-6.653 0-12.07 5.252-12.07 11.702s5.417 11.702 12.07 11.702c6.654 0 12.072-5.252 12.072-11.702S46.082 10 39.428 10z"></path>
                        </svg>
                      </span>
                      <span className="font-bold text-base lg:text-3xl text-slate-50">
                        A UNIFIED GAMING COMMUNITY
                      </span>
                    </div>
                    <div
                      className="text-4xl lg:text-5xl font-bold "
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #F9FF45, #FF7D45, #FF4579)",
                        color: "transparent",
                        lineHeight: "1.5",
                        paddingBottom: "5px",
                        backgroundClip: "text",
                        fontWeight: "bold",
                      }}
                    >
                      Join a Worldwide Community Of Gamers
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Connect with fellow players on any platform, for any game
                    </div>
                    <div className="lg:text-xl">
                      No matter if you&apos;re gaming on PC or console, you&apos;re part
                      of a global community of Anrex gamers, accessing the same
                      set of features. Regular updates will expand your options
                      for engaging with this constantly growing community
                    </div>
                    <br />
                    {/* <div className="lg:text-2xl">
                      Find friends on all platforms, see what they&apos;re playing,
                      and check their achievements.
                    </div> */}
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Discover friends across all platforms, view their gaming
                      activity, and track their accomplishments.
                    </div>
                    <div className="lg:text-xl">
                      Seamless progression across all devices With our latest
                      releases*, your in-game progress is automatically synced
                      across Anrex Connect, ensuring a smooth transition if you
                      switch consoles or move to PC
                    </div>
                    {/* <br />
                    <div className="lg:text-sm text-xs">
                      *Assassin&apos;s Creed Valhalla, Immortals Fenyx Rising, Riders
                      Republic
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div
              id="rewards"
              className="relative portrait:py-10 landscape:py-20"
              //       style={{
              //         background: `linear-gradient(0deg, #0d0d0d 1.55%, rgba(13, 13, 13, 0) 11.08%),
              // linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 8.3%), #0a1626`,
              //       }}
            >
              <div
                style={{
                  background: `radial-gradient(51.3% 42.62% at right center, #055971 0, rgba(5, 89, 113, 0) 100%)`,
                }}
                className="main_gradient absolute top-0 bottom-0 left-0 right-0 w-full h-full"
              ></div>
              <div className="flex flex-wrap justify-center z-10 relative">
                <div className="flex flex-col sm:flex-row-reverse portrait:flex-col m-auto justify-center w-100 items-center ">
                  <div className="relative flex w-full landscape:pr-5 justify-center my-auto">
                    <Image
                    alt=""
                      width={1000}
                      height={1000}
                      src="/home/Celebration Homepage.png"
                    />
                  </div>
                  <div className="w-full relative landscape:pr-4 landscape:pl-12 px-4 text-ubiwhite">
                    <div className="flex py-2 justify-start items-center">
                      <span>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 64 64"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="upn-icon"
                        >
                          <path d="M51.25 20.857H38.417l2.235-.448c3.076-.532 5.393-2.871 5.942-5.849a7.053 7.053 0 00-2.087-6.433C43.078 6.744 41.31 6 39.278 6c-.439 0-.933.053-1.373.106-3.076.532-5.493 2.872-6.042 5.849l-.495 2.659-.494-2.659c-.55-2.977-2.966-5.317-6.043-5.849C24.392 6 23.898 6 23.458 6c-1.977 0-4.358.798-5.786 2.18-1.758 1.701-2.527 4.094-2.088 6.434.55 2.977 3.425 5.263 6.5 5.795l2.124.448H12.75c-1.538 0-2.75 1.094-2.75 2.583v11.346c0 1.489 1.212 2.785 2.75 2.785V55.36c0 1.49 1.37 2.641 2.908 2.641h32.959c1.538 0 2.633-1.297 2.633-2.786V37.571c1.375 0 2.75-1.11 2.75-2.785V23.44c-.055-1.436-1.212-2.583-2.75-2.583zm-.917 13h-16.5v-9.286h16.5v9.286zm-14.625-18.5l.494-2.658c.22-1.223 1.264-2.233 2.527-2.445.165-.054.385-.054.604-.054a3.13 3.13 0 012.198.904 3.074 3.074 0 01.879 2.712c-.22 1.223-1.264 2.233-2.527 2.446l-4.45.797.275-1.701zm-15.625-1.464c-.164-.957.148-2.095.917-2.786.604-.585 1.69-.853 2.513-.853.22 0 .385 0 .604.053 1.264.212 2.307 1.223 2.527 2.446l.495 2.658.33 1.648-4.45-.797c-1.319-.213-2.716-1.146-2.936-2.37zM13.667 24.57h16.5v9.286h-16.5v-9.286zm2.75 13h13.75v16.715h-13.75V37.57zm31.166 16.715h-13.75V37.57h13.75v16.715z"></path>
                        </svg>
                      </span>
                      <span className="font-bold text-base lg:text-3xl text-slate-50">
                        OUR LOYALTY REWARDS
                      </span>
                    </div>
                    <div
                      className="text-4xl lg:text-5xl font-bold "
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #01E3BE, #007FDE)",
                        color: "transparent",
                        backgroundClip: "text",
                        lineHeight: "1.5",
                        paddingBottom: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Continuous festivities
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Achieve greater success
                    </div>
                    <div className="lg:text-2xl">
                      Discover an array of over 1000 complimentary rewards
                      throughout our extensive game library.
                    </div>
                    <br />
                    <div className="lg:text-2xl">
                      In our newest releases, gain access to mythical weaponry,
                      character apparel, emoticons, and consumables simply by
                      engaging in your gaming adventures. With each advancement
                      in{" "}
                      <Link className="text-ubiblue" href="/token">
                        AnrexToken
                      </Link>
                      , you&apos;ll accumulate Units which can be exchanged for
                      exclusive incentives.
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Enjoy a 20% discount at the Anrex Store
                    </div>
                    <div className="lg:text-2xl">
                      Exchange 100 Units to receive a 20% discount on your
                      upcoming acquisition from the Anrex Store.*
                    </div>
                    <br />

                    <button
                      type="button"
                      className=" pl-5 flex rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      <span>Get 20% off with</span>
                      <div className="flex flex-row justify-center">
                        <div className="relative w-7 h-87 ">
                          <Image src="/coinicon.svg" fill alt="coin"></Image>
                        </div>
                        <span className="pr-2">100</span>
                      </div>
                    </button>

                    <br />
                    <div className="lg:text-sm text-xs">
                      *Some restrictions on eligible products may apply. Please
                      refer to the Terms of Use.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="guidance"
              className="relative portrait:py-10 landscape:py-20"
              //       style={{
              //         background: `linear-gradient(0deg, #0d0d0d 1.55%, rgba(13, 13, 13, 0) 11.08%),
              // linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 8.3%), #0a1626`,
              //       }}
            >
              <div
                style={{
                  background: `radial-gradient(45.52% 45.16% at left center, #1b4b3a 0, rgba(27, 75, 67, 0) 100%)`,
                }}
                className="main_gradient absolute top-0 bottom-0 left-0 right-0 w-full h-full"
              ></div>
              <div className="flex flex-wrap justify-center">
                <div className="flex flex-col sm:flex-row portrait:flex-col m-auto justify-center w-100 items-center ">
                  <div className="relative flex w-full landscape:pl-5 justify-center my-auto landscape:pr-5">
                    <Image alt=""
                      width={1000}
                      height={1000}
                      src="/home/Know More and Improve.png"
                    />
                  </div>
                  <div className="w-full relative landscape:pl-4 landscape:pr-12 px-4 text-ubiwhite">
                    <div className="flex py-2 justify-start items-center">
                      <span>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 64 64"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="upn-icon"
                        >
                          <path d="M55.5 12h-15c-1.4 0-2.5 1.1-2.5 2.5V22H24.5c-1.4 0-2.5 1.1-2.5 2.5V32H8.5C7.1 32 6 33.1 6 34.5v15C6 50.9 7.1 52 8.5 52h15c.15 0 .35 0 .5-.05.15.05.3.05.5.05h15c.2 0 .35 0 .5-.05.15.05.35.05.5.05h15c1.4 0 2.5-1.1 2.5-2.5v-35c0-1.35-1.1-2.5-2.5-2.5zM10 36h12v12H10V36zm28 12H26V34.5 26h12v22zm16 0H42V16h12v32z"></path>
                        </svg>
                      </span>
                      <span className="font-bold text-xl lg:text-3xl text-slate-50">
                        ANALYTICS AND GUIDANCE
                      </span>
                    </div>
                    <div
                      className="text-4xl lg:text-5xl font-bold "
                      style={{
                        backgroundImage:
                          "linear-gradient(111.95deg, #D6FF5B, #14FEC6)",
                        color: "transparent",
                        backgroundClip: "text",
                        lineHeight: "1.5",
                        paddingBottom: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Enhance your skills with insights
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Review your statistics whenever necessary and benchmark
                      them against those of your friends
                    </div>
                    <div className="lg:text-2xl">
                      Stay informed about your statistics, advancement, and
                      achievements across your preferred games.
                    </div>
                    <br />
                    <div className="lg:text-2xl">
                      Measure your progress alongside your friends, irrespective
                      of their gaming platform.
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Stay informed about the latest developments and activities
                      in your preferred games
                    </div>
                    <div className="lg:text-2xl">
                      Monitor your feed to stay updated on all the recent
                      developments in your games: upcoming seasons, fresh
                      challenges, and rewards... We&apos;re here to provide you with
                      comprehensive updates on the games you&apos;re passionate about
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="enhance"
              className="relative portrait:py-10 landscape:py-20"
              //       style={{
              //         background: `linear-gradient(0deg, #0d0d0d 1.55%, rgba(13, 13, 13, 0) 11.08%),
              // linear-gradient(180deg, #0d0d0d .79%, rgba(13, 13, 13, 0) 8.3%), #0a1626`,
              //       }}
            >
              <div
                style={{
                  background: `radial-gradient(80.47% 44.15% at right center, #710546 0, rgba(113, 5, 57, 0) 100%)`,
                }}
                className="main_gradient absolute top-0 bottom-0 left-0 right-0 w-full h-full"
              ></div>
              <div className="flex flex-wrap justify-center">
                <div className="flex flex-col sm:flex-row-reverse portrait:flex-col m-auto justify-center w-100 items-center ">
                  <div className="relative flex w-full landscape:pr-5 justify-center my-auto">
                    <Image alt=""
                      width={1000}
                      height={1000}
                      src="/home/Anrex Connect Homepage.png"
                    />
                  </div>
                  <div className="w-full relative landscape:pr-4 landscape:pl-12 px-4 text-ubiwhite">
                    <div className="flex py-2 justify-start items-center">
                      <span>
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 64 64"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="upn-icon"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.807 24.427c-1.419 0-2.62 1.177-2.62 2.68v18.26c0 4.691 3.751 8.45 8.317 8.45 4.564 0 8.309-3.756 8.309-8.45v-18.26c0-1.503-1.201-2.68-2.62-2.68H26.807zM20 27.107c0-3.762 3.023-6.863 6.807-6.863h11.386c3.784 0 6.807 3.101 6.807 6.863v18.26C45 52.315 39.437 58 32.504 58 25.574 58 20 52.317 20 45.368v-18.26z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.928 12.798c-.02-.023-.068-.096-.068-.267V7.16a1.16 1.16 0 10-2.32 0v5.37c0 .614.207 1.249.595 1.738.393.497.986.854 1.729.85h10.991c.02.024.072.098.072.273v.78c0 .175-.051.25-.072.273h-4.25c-.74 0-1.331.358-1.725.854a2.838 2.838 0 00-.595 1.74v1.21a1.16 1.16 0 102.32 0v-1.21c0-.174.052-.248.072-.272v-.001h4.25c.74 0 1.331-.357 1.725-.854.388-.489.595-1.123.595-1.74v-.78c0-.616-.207-1.25-.595-1.74-.394-.496-.985-.854-1.725-.854H26.928z"
                          ></path>
                          <path d="M30.577 28.574c0-1.049.86-1.899 1.923-1.899 1.062 0 1.923.85 1.923 1.899v5.695c0 1.049-.86 1.899-1.923 1.899-1.062 0-1.923-.85-1.923-1.899v-5.695z"></path>
                        </svg>
                      </span>
                      <span className="font-bold text-xl lg:text-3xl text-slate-50">
                        INTRODUCING THE ANREX CONNECT DESKTOP APP
                      </span>
                    </div>
                    <div
                      className="text-4xl lg:text-5xl font-bold "
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #FE461E, #EA1545, #A213BA)",
                        color: "transparent",
                        backgroundClip: "text",
                        lineHeight: "1.5",
                        paddingBottom: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      Elevate your PC gaming experience
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Your portal to our universes
                    </div>
                    <div className="lg:text-2xl">
                      Effortlessly manage and launch your games from the
                      library, explore fresh content, and initiate downloads
                      using our desktop app with just a single click. Gain entry
                      to the Anrex+ subscription service and delve into a vast
                      selection of 100+ PC games, featuring our latest releases
                      and deluxe editions*.
                    </div>
                    <br />
                    <div className="lg:text-2xl">
                      Share these experiences with your friends, team up for
                      multiplayer adventures, and establish new conversations
                      and group chats.
                    </div>
                    <br />
                    <div className="font-bold text-sm landscape:md:text-3xl text-slate-50">
                      Participate in regular giveaways and weekend events
                    </div>
                    <div className="lg:text-2xl">
                      Experience new games by engaging in the various events
                      hosted through the Anrex Connect desktop app, including
                      free weekend trials and giveaways. Additionally, gain
                      exclusive early access to select games and major updates
                      by signing up for beta events and joining public test
                      servers.
                    </div>
                    <br />
                    <div className="lg:text-sm text-xs">
                      Both of you need to be Anrex Connect friends and have the
                      Anrex Connect desktop app running
                    </div>
                    <br />
                    <button
                      type="button"
                      className=" pl-5 flex rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      <span>Download for PC&#160;</span>
                      <div className="flex flex-row justify-center">
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="img"
                          className="upn-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M8.5 1.99c0-0.27-0.227-0.49-0.506-0.49s-0.506 0.219-0.506 0.49v9.655l-3.264-3.157c-0.198-0.191-0.518-0.191-0.716 0s-0.198 0.501 0 0.693l4.487 4.339 4.487-4.339c0.198-0.191 0.198-0.501 0-0.693s-0.518-0.191-0.716 0l-3.264 3.157v-9.655z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M3.506 13.521c-0.28 0-0.506 0.219-0.506 0.49s0.227 0.49 0.506 0.49h8.987c0.28 0 0.506-0.219 0.506-0.49s-0.227-0.49-0.506-0.49h-8.987z"
                          ></path>
                        </svg>
                        <span className="pr-2"> </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-full md:max-w-1080 mx-auto justify-center align-middle items-center">
              <div
                className="text-4xl lg:text-5xl font-bold "
                style={{
                  backgroundImage: "linear-gradient(98deg, #08C1B5, #194CFF)",
                  color: "transparent",
                  lineHeight: "1.5",
                  paddingBottom: "5px",
                  backgroundClip: "text",
                  fontWeight: "bold",
                }}
              >
                Unlock your Anrex Connect perks wherever and whenever you need
                them
              </div>
              <div className="text-ubiwhite">
                Console | Desktop | Mobile | Web
              </div>
              <div className=" w-full max-w-900 h-auto">
                <Image
                alt=""
                  src="/home/Access your Ubisoft Connect benefits anytime and anywhere.png"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex items-center pt-6 justify-center">
                <a className="" href="#">
                  <div className="inline-block mx-2 md:w-145 w-95  ">
                    <Image
                    alt=""
                      width={1000}
                      height={1000}
                      src="/home/link1.svg"
                    ></Image>
                  </div>
                </a>
                <a href="#">
                  <div className="inline-block mx-2 md:w-162 w-105 ">
                    <Image
                    alt=""
                      width={1000}
                      height={1000}
                      src="/home/link2.svg"
                    ></Image>
                  </div>
                </a>
                <a href="#">
                  <div className="inline-block md:w-174 w-115">
                    <Image
                    alt=""
                      width={1000}
                      height={1000}
                      src="/home/link3.png"
                    ></Image>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
