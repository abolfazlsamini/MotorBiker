import Footer from "../footer";
import Navbar from "../navbar";
import Image from "next/image";
export default function SharePlay() {
  return (
    <>
      <title>Share-Play</title>
      <Navbar />
      <div
        className="justify-center flex"
        style={{ fontFamily: "Roboto,sans-serif" }}
      >
        <div
          className="relative w-full pt-10"
          style={{ backgroundColor: "#0a1626" }}
        >
          <div className="share_play_gradient absolute p-0 top-0 bottom-0 left-0 right-0"></div>
          <div className="text-center mt-8 text-slate-50 pt-2 pb-20 sm:pt-2 sm:pb-20 sm:pr-8 sm:pl-8 sm:mt-0 sm:mb-0 sm:ml-auto sm:mr-auto relative max-w-768 xl:max-w-880 px-5 lg:px-0 ">
            <div className="flex flex-row justify-center items-center">
              <Image width={1000} height={1000} src="/shareplay/shareplayicon.png"></Image>
              <div className="xl:text-2xl ml-2 font-bold">SHARE PLAY</div>
              <div
                className="mx-3 text-black font-bold p-1 px-2 text-xs rounded-md"
                style={{
                  background:
                    "linear-gradient(115.01deg, #e49621 5.43%, #de164f)",
                }}
              >
                OPEN BATA
              </div>
            </div>
            <div
              className="text-transparent text-4xl xl:text-7xl pt-5 font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #F9FF45 0%, #FF7D45 47.4%, #FF4579 100%)",
                backgroundClip: "text",
              }}
            >
              Experience Share Play functionality on your PC
            </div>
            <div className="xl:text-2xl text-2xl pt-5 font-bold">
              Share Play enables you to stream your gameplay and relinquish
              control to up to three remote participants (subject to game
              compatibility) via the Anrex Connect desktop application.
            </div>
            <div className="relative">
              <Image
                src="/shareplay/Share play Image.png"
                width={1000}
                height={1000}
                alt="coin"
              ></Image>
            </div>
            <div className="flex items-center my-auto text-start ">
              <div className="size-8 mr-6 flex">
                <svg viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M2.25 2.25h11.5c0.414 0 0.75 0.336 0.75 0.75v7.7c0 0.414-0.336 0.75-0.75 0.75h-11.5c-0.414 0-0.75-0.336-0.75-0.75v-7.7c0-0.414 0.336-0.75 0.75-0.75zM13.571 3.17h-11.143v7.36h11.143v-7.36zM6.607 11.45v1.38h2.786v-1.38h-2.786zM5 12.83h6c0.138 0 0.25 0.112 0.25 0.25v0.42c0 0.138-0.112 0.25-0.25 0.25h-6c-0.138 0-0.25-0.112-0.25-0.25v-0.42c0-0.138 0.112-0.25 0.25-0.25z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="xl:text-2xl text-2xl pt-5 font-bold">
                  Introduce your guests to handpicked Anrex titles on PC
                </div>
                <div>
                  Broadcast your gaming session to highlight pivotal moments,
                  allow guests to assume control, or engage in cooperative play
                  remotely (where applicable).
                </div>
              </div>
            </div>
            <div className="flex items-center my-auto text-start">
              <div className="size-8 mr-6 flex">
                <svg viewBox="0 0 64 64" fill="currentColor" role="img">
                  <path d="M23 0a2 2 0 011.536.72l15 18A2 2 0 0138 22h-5v4h-4v-8h4.73L23 5.124 12.27 18H17v26h5v4h-7a2 2 0 01-2-2V22H8a2 2 0 01-1.536-3.28l15-18A2 2 0 0123 0z"></path>
                  <path d="M42 41a2 2 0 100-4h-5v-5a2 2 0 10-4 0v5h-5a2 2 0 100 4h5v5a2 2 0 104 0v-5h5z"></path>
                </svg>
              </div>
              <div>
                <div className="xl:text-2xl text-2xl pt-5 font-bold">
                  Collaborate for mutual benefit!
                </div>
                <div>
                  Exchange tips and strategies to elevate guests&apos; gameplay, or
                  request assistance when encountering obstacles.
                </div>
              </div>
            </div>
            <div className="flex items-center my-auto text-start">
              <div className="size-8 mr-6 flex">
                <svg viewBox="0 0 64 64" fill="currentColor" role="img">
                  <path d="M57.652 30.868C55.989 28.332 47.542 15.598 32 16.01 17.628 16.33 8.61 27.44 6.348 30.868A2.076 2.076 0 006 32.01c0 .4.12.795.348 1.142C7.986 35.642 16.744 48 32.052 48c14.372-.32 23.365-11.422 25.6-14.848.228-.347.348-.741.348-1.142 0-.401-.12-.795-.348-1.142zm-25.6 13.578C20.85 44.674 12.287 35.23 10 32.01c2.599-3.678 11.604-12.217 22-12.446 11.15-.251 19.687 9.225 22 12.446-2.677 3.678-11.552 12.207-21.948 12.436z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.5 32a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="xl:text-2xl text-2xl pt-5 font-bold">
                  Display each other&apos;s expertise
                </div>
                <div>
                  Live-stream your session to showcase your prowess, or spice
                  things up by swapping controls and issuing challenges.
                </div>
              </div>
            </div>
            <div className="xl:text-2xl pt-5">
              <button
                type="button"
                className="inline-block rounded-3xl bg-ubiblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              >
                launch anrexconnect app
              </button>
            </div>
            <Image width={1000} height={1000}
              className="py-5 w-full"
              src="/shareplay/line.png"
              alt="separator"
            ></Image>
            <div
              className="text-transparent text-4xl xl:text-7xl font-bold my-5"
              style={{
                backgroundImage:
                  "linear-gradient(112deg, #F9FF45 0%, #FF7D45 47.4%, #FF4579 100%)",
                backgroundClip: "text",
              }}
            >
              How can I utilize Share Play with my friends?
            </div>
            <div className="flex-col flex ">
              <div
                className="self-start relative max-w-72 lg:max-w-768 md:max-w-600 pb-5 ml-5 pr-7 pl-11 my-5"
                style={{
                  border: "3px solid",
                  borderColor: "rgba(240, 255, 64, .3)",
                  borderRadius: "9px",
                  background:
                    "radial-gradient(75% 157.46% at 0 1.94%, rgba(152, 137, 0, .5) 0, rgba(125, 114, 14, .3) 30.97%, rgba(62, 59, 0, 0) 72.51%), #0d0d0d",
                }}
              >
                <div className="absolute -left-8 h-16 w-16 xl:h-20 xl:w-20 xl:-left-10">
                  <Image width={1000} height={1000} src="/shareplay/person1.avif" alt="avatar"></Image>
                </div>
                <div className="xl:text-3xl pb-3 text-2xl pt-5 font-bold">
                  To play as the host
                </div>
                <div className="xl:text-2xl">
                  To engage in Share Play, ensure you have the relevant Share
                  Play-compatible game installed via the Anrex Connect desktop
                  app. Your guests are not required to own the game themselves.
                  Once you initiate the game, you can extend invitations to your
                  guest(s) via the in-game overlay or game page, then commence
                  streaming.
                </div>
              </div>
              <div
                className="self-end relative max-w-72 lg:max-w-768 md:max-w-600 mr-5 pb-5 pl-7 pr-11 my-5"
                style={{
                  border: "3px solid ",
                  borderRadius: "9px",
                  borderColor: "rgba(255, 121, 64, .3)",
                  background:
                    "radial-gradient(70.16% 149.75% at 108.8% 8.44%, rgba(255, 84, 107, .6) 0, rgba(255, 84, 106, .246) 26.72%, rgba(255, 84, 107, 0) 72.51%), #0d0d0d",
                }}
              >
                <div className="absolute -right-8 h-16 w-16 xl:h-20 xl:w-20 xl:-right-10">
                  <Image width={1000} height={1000} src="/shareplay/person2.png" alt="avatar"></Image>
                </div>
                <div className="xl:text-3xl pb-3 text-2xl pt-5 font-bold">
                  To play as a guest
                </div>
                <div className="xl:text-2xl">
                  To begin the streaming session, simply remain connected on the
                  Anrex Connect desktop app and accept the invitation prompt
                  that appears in your chat window.
                </div>
              </div>
              <ul className="list-disc self-start text-start px-9 xl:text-2xl text-xl">
                <li className="self-start text-start">
                  Please note that the duration of the gaming session may vary
                  depending on the title. While there&apos;s no restriction on the
                  number of sessions you can share with guests, each session is
                  subject to time constraints.
                </li>
                <li>
                  During streaming, you can either retain control of the game
                  while your guests observe or delegate control to them.
                  Alternatively, engage in cooperative gameplay in select
                  titles!
                </li>
                <li>
                  Both parties must be Ubisoft Connect friends and have the
                  Ubisoft Connect desktop app operational.
                </li>
                <li>
                  Ensure both you and your guests have robust, stable internet
                  connections (minimum 10 Mb/sec) for optimal performance.
                </li>
              </ul>
              <br />
              <div className="text-start px-4">
                *Share Play on Anrex Connect PC does not support multiplayer nor
                multi-controller yet. For more information, consult the{" "}
                <a className="text-ubiblue" href="#">
                  FAQ
                </a>
              </div>
              <Image width={1000} height={1000}
                className="py-5 w-full"
                src="/shareplay/line.png"
                alt="separator"
              ></Image>
              <div className="px-3">
                <div
                  className="text-transparent text-4xl xl:text-7xl py-5 font-bold"
                  style={{
                    backgroundImage:
                      "linear-gradient(112deg, #F9FF45 0%, #FF7D45 47.4%, #FF4579 100%)",
                    backgroundClip: "text",
                  }}
                >
                  Your input is invaluable to us
                </div>
                <div className="text-xl">
                  **Share Play functionality is currently undergoing testing
                  with: Operation eagle , rocket motorbiker , projextx
                </div>
                <br />
                <div className="text-xl">
                  It is already operational with numerous titles; to verify
                  compatibility, consult the game&apos;s page within the Anrex
                  Connect desktop app.
                </div>
                <br />
                <div className="text-xl">
                  To aid us in refining this feature, please feel free to report
                  any encountered issues and provide feedback immediately
                  following your session via the in-game notification or on
                  Ubisoft&apos;s platform.
                </div>
                <br />
                <div className="xl:text-2xl pt-5">
                  <button
                    type="button"
                    className="inline-block rounded-3xl font-bold bg-ubiblue px-6 pb-2 pt-2.5 text-base leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-ubibluehover hover:shadow-primary-2 focus:bg-ubibluehover focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Give your feedbacks here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
