import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative h-78 lg:h-75">
        <div className="absolute h-105 z-11 w-full lg:h-110">
          <video
            autoPlay
            muted
            loop
            src="vid1.mp4"
            className=" h-full object-cover w-full"
          ></video>
        </div>

        <div className="flex items-center justify-center flex-col h-full">
          <div className="w-2/3  lg:w-1/3  sm:w-1/3 ">
            <Image
              alt=""
              src={"/logovid.png"}
              width={2000}
              height={2000}
            ></Image>
          </div>
          <div
            className="text-white text-lg font-bold"
            style={{ fontFamily: "DIN-CondBlack,sans-serif" }}
          >
            Rocket : MotorBiker
          </div>
          <br />
          <div className="text-white text-lg font-bold">AVAILABLE NOW</div>
          <Link className="btnparent" href="#">
            <span className="btn">BUY NOW</span>
          </Link>
          <div className="flex arrowcont pt-5">
            <div
              className="arrow text-white text-lg font-bold"
              style={{
                fontFamily: "DIN-CondBlack,sans-serif",
              }}
            ></div>
            <div>FREE TRIAL</div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(bg.jpg)",
          backgroundSize: "100% 90%",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            backgroundImage: "url(bg2.png), url(bg2.png)",
            backgroundPosition: "top right, top left",
            backgroundPositionY: "30%",
            backgroundSize: "30% 30%",
            backgroundRepeat: "no-repeat",
          }}
          className="[background-position-y:0%] sm:[background-position-y:15%] md:[background-position-y:20%] "
        >
          <div className="w-full h-1/2 ">
            <Image
              alt=""
              className="w-full"
              src="1.svg"
              width={2000}
              height={2000}
            ></Image>
          </div>
          <div className="flex flex-col sm:flex-row pl-10 pr-10 sm:pl-32 sm:pr-32 sm:items-center">
            <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
              <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full -rotate-2 ">
                <Image
                  alt=""
                  className="border-8 border-slate-200"
                  style={{ boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)" }}
                  src="/Motorbiker Home 01.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="sm:pl-5 flex justify-center flex-col pb-20 w-full sm:h-99">
              <div className="text-4xl xl:text-6xl w-full pt-5 pb-5 font-bold">
                IT&apos;S SHOWTIME IN ROCKET
              </div>
              <div
                className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
              >
                The Motorbiker arrives at Rocket with fresh playlists,
                additional events, and brand-new vehicles! Demonstrate your
                prowess as a Hollywood stunt driver in action-packed sequences
                inspired by classic films and television series.
              </div>
              <div>
                <Link className="inline-block btnparent" href="#">
                  <span className="btn">LEARN MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "url(bg-black2.png), url(bg-black.png)",

          backgroundColor: "#292929",
          backgroundSize: "100% 30%",
          backgroundPosition: "top, bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="w-full h-1/2 bg-white">
            <Image
              alt=""
              src="/bg-black-leftright.svg"
              width={2000}
              height={2000}
              className="w-full"
            ></Image>
          </div>
          <div className="flex flex-col sm:flex-row-reverse pl-10 pr-10 sm:pl-32 sm:pr-32 sm:items-center">
            <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
              <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full -rotate-2 ">
                <div className="playbtn absolute w-16 h-16 -rotate-2 "></div>
                <Image
                  alt=""
                  className="border-8 border-slate-200"
                  style={{ boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)" }}
                  src="/Trailer.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="sm:pl-5 sm:mt-5 text-slate-50 flex justify-center flex-col pb-20 w-full sm:h-99">
              <div className="text-4xl xl:text-6xl w-full pt-5 pb-5 font-bold">
                Check out the reviews from critics on The Rocket Motorbiker!
              </div>
              <div
                className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed"
                style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
              >
                Secure your pass and be part of a year-long celebration tailored
                for automobile enthusiasts of all kinds: Embark on an adventure
                through a lively Hawaiian open-world, situated on the
                picturesque island of Ya&apos;Hota. Acquire a vast collection of
                over 600 vehicles, ranging from cars and boats to planes and
                bikes. Form alliances with your friends to traverse the world
                cooperatively or compete against them in demanding PvP modes,
                accommodating up to 32 players.
              </div>
              <div>
                <Link className="inline-block btnparent" href="#">
                  <span className="btn">BUY NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-106 xl:h-115 h-60">
        <div
          className=" sm:bg-[length:100%_10%] bg-[length:100%_3%] sm:h-110 relative text-center"
          style={{
            backgroundImage: "url(bg-black-bottom.png)",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            // style={{ maskImage: "url(wallpaper.svg)"}}
            className="relative z-11 h-30 sm:h-full"
          >
            <Image
              alt=""
              className=" h-full w-full"
              src="/MororBiker Wallpaper.png"
              fill
            ></Image>
          </div>
          <div className="relative z-11 h-30 sm:h-full">
            <Image alt="" className=" h-full w-full" src="/bg.jpg" fill></Image>
          </div>
          <div className="absolute mt-10 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 left-1/5 bottom-16">
            <div className="sm:text-slate-50 font-bold text-2xl sm:text-5xl pb-5">
              WELCOME TO MOTORFEST
            </div>
            <div className="sm:text-slate-50 font-bold sm:text-xl">
              Secure your admission to a year-long festival crafted for car
              enthusiasts of all kinds, located on the stunning island of
              Ya&apos;Hota.
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          style={{
            backgroundImage: "url(bg1.jpg)",
            textAlign: "center",
          }}
        >
          <div className="p-10 relative">
            <div
              className="text-3xl absolute top-0 left-1/2 p-5 -translate-x-1/2 xl:text-4xl sm:text-2xl bold "
              style={{
                backgroundImage: "url(bg-yellowtxt.png)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              KEY HIGHLIGHTS
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(bg.jpg)",
              backgroundSize: "100% 90%",
              backgroundPosition: "center 50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col sm:flex-row pl-10 pr-10 sm:pl-32 sm:pr-32 sm:items-center">
              <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
                <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full -rotate-2 ">
                  <Image
                    alt=""
                    className="border-8 border-slate-200"
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      borderImage:
                        "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                    }}
                    src="/MororBiker Wallpaper 02.png"
                    fill
                  ></Image>
                </div>
              </div>
              <div
                className="sm:pl-5 pt-10 flex justify-center flex-col pb-20 w-full sm:h-99"
                style={{
                  backgroundImage: " url(bg-redtxt2.png),url(bg-yellowtxt.png)",
                  backgroundSize: "39% 9%, 100% 16%",
                  backgroundPositionX: "0%, 0%",
                  backgroundPositionY: "5% , 16%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-3xl xl:text-4xl sm:text-2xl w-full pt-5 pb-5 font-bold">
                  EXPLORE EVERY ASPECT OF CAR CULTURE
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                  style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                >
                  Introducing the Playlists: a collection of brief thematic
                  campaigns presenting distinctive and thrilling car culture
                  encounters. Each playlist is meticulously crafted to plunge
                  you into a distinct car culture realm, featuring customized
                  races, themed events, and other distinctive challenges.
                  Whether you&apos;re honing your skills in vintage classics or
                  electric supercars, aiming to dominate the racetrack, or
                  simply enjoying a leisurely cruise with friends, there&apos;s
                  a playlist tailored to suit your preferences.
                </div>
                <div>
                  <Link className="inline-block btnparent" href="#">
                    <span className="btn">BUY NOW</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse pl-10 pr-10 sm:pl-32 sm:pr-32 sm:items-center">
              <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
                <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full rotate-2 ">
                  <Image
                    alt=""
                    className="border-8 border-slate-200"
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      borderImage:
                        "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                    }}
                    src="/EMBARK ON AN EXHILARATING.png"
                    fill
                  ></Image>
                </div>
              </div>
              <div
                className="sm:pl-5 pt-10 flex justify-center flex-col pb-20 w-full sm:h-99"
                style={{
                  backgroundImage: " url(bg-redtxt1.png),url(bg-yellowtxt.png)",
                  backgroundSize: "39% 9%, 100% 16%",
                  backgroundPositionX: "0%, 0%",
                  backgroundPositionY: "5% , 16%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-2xl xl:text-4xl sm:text-2xl w-full pt-5 pb-5 font-bold">
                  EMBARK ON AN EXHILARATING JOURNEY THROUGH THE VIBRANT HAWAIIAN
                  OPEN WORLD ALONGSIDE YOUR ROCKET
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                  style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                >
                  Prepare yourself for the ultimate driving escapade on the
                  captivating island of Ya&apos;Hota, renowned as the crown
                  jewel of the Hawaiian archipelago.
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                  style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                >
                  Engage in various activities solo or with fellow players:
                  participate in high-octane street races amidst the bustling
                  streets of Honolulu, test your off-road prowess on the rugged
                  slopes of a volcano, or perfect your cornering skills on race
                  tracks. When it&apos;s time to unwind, recline on the
                  sun-kissed beaches while behind the wheel of your preferred
                  supercar, or opt for a buggy to navigate the hidden trails of
                  the lush rainforest.
                </div>
                <div>
                  <Link className="inline-block btnparent" href="#">
                    <span className="btn">BUY NOW</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row pl-10 pr-10 sm:pl-32 sm:pr-32 sm:items-center">
              <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
                <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full -rotate-2 ">
                  <Image
                    alt=""
                    className="border-8 border-slate-200"
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      borderImage:
                        "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                    }}
                    src="/HAVEN FOR CAR LOVERS.png"
                    fill
                  ></Image>
                </div>
              </div>
              <div
                className="sm:pl-5 pt-10 flex justify-center flex-col pb-20 w-full sm:h-99"
                style={{
                  backgroundImage:
                    " url(bg-redtxt3.png),url(bg-yellowtxt3.png)",
                  backgroundSize: "39% 9%, 100% 16%",
                  backgroundPositionX: "0%, 0%",
                  backgroundPositionY: "5% , 16%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-3xl xl:text-4xl sm:text-2xl w-full pt-5 pb-5 font-bold">
                  ENGAGE IN MOTORBIKER, A CONSTANTLY EVOLVING PARADISE FOR AUTO
                  ENTHUSIASTS
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                  style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                >
                  Immerse yourself in a dynamic lineup of events: explore fresh
                  perspectives on car culture with an array of themed campaigns,
                  adrenaline-fueled racing competitions, and diverse competitive
                  live events. Amass a vast collection of iconic vehicles
                  spanning the eras, from classic to contemporary and beyond.
                  From its initial release and into the future, The ROCKER™
                  Motorbiker will continuously present ample chances for you to
                  showcase your expertise, express your individuality, and etch
                  your legacy into the annals of the festival&apos;s history.
                </div>
                <div>
                  <Link className="inline-block btnparent" href="#">
                    <span className="btn">BUY NOW</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#292929",
            backgroundSize: "100% 30%",
            backgroundPosition: "top, bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-slate-50">
            <div className="w-full h-1/2 bg-white">
              <Image
                alt=""
                src="/bg-live.svg"
                className="w-full"
                width={2000}
                height={2000}
              ></Image>
            </div>
            <div className="pt-5 pb-20">
              <div className="text-4xl w-11/12 pt-5 pb-5 font-bold text-center text-slate-50">
                LIVE GAME MODES
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:align-top sm:pl-20 sm:pr-20">
              <div className=" w-10/12 mb-5 h-1/5 sm:ml-5 ">
                <div className="relative pb-4 w-full h-40 sm:h-30 ">
                  <Image
                    alt=""
                    className="border-4 border-slate-200 "
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    }}
                    src="/Epic Rally.png"
                    fill
                  ></Image>
                </div>
                <div>
                  Join the high-speed, adrenaline-pumping races with up to 28
                  players, where every man is for himself in the ultimate
                  showdown at Motorbiker!
                </div>
              </div>
              <div className=" w-10/12 mb-5 h-1/5 sm:ml-5 ">
                <div className="relative pb-4 w-full h-40 sm:h-30 ">
                  <Image
                    alt=""
                    className="border-4 border-slate-200 "
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    }}
                    src="/PEAK CHALLENGE.png"
                    fill
                  ></Image>
                </div>
                <div>
                  Compete in weekly ranked events and earn top rewards by
                  climbing your way to the summit of the leaderboards.
                </div>
              </div>
              <div className=" w-10/12 mb-5 h-1/5 sm:ml-5 ">
                <div className="relative pb-4 w-full h-40 sm:h-30 ">
                  <Image
                    alt=""
                    className="border-4 border-slate-200 "
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    }}
                    src="/STYLE SHOWDOWN.png"
                    fill
                  ></Image>
                </div>
                <div>
                  Show off your unique flair in the weekly custom show
                  competitions and seize the opportunity to claim exclusive
                  rewards
                </div>
              </div>
              <div className=" w-10/12 mb-5 h-1/5 sm:ml-5 ">
                <div className="relative pb-4 w-full h-40 sm:h-30 ">
                  <Image
                    alt=""
                    className="border-4 border-slate-200 "
                    style={{
                      boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    }}
                    src="/WRECKAGE WARS.png"
                    fill
                  ></Image>
                </div>
                <div>
                  32 players divided into 8 teams battle it out, with the last
                  team standing emerging victorious in this intense demolition
                  derby!
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 bg-white">
              <Image
                alt=""
                src="/bg-live2.svg"
                className="w-full"
                width={2000}
                height={2000}
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex justify-center ml-2 mr-2 pt-5 pb-5">
          <div
            style={{
              border: "30px solid transparent",
              borderImage: "url(border-ticket.png)",
              borderImageSlice: "40",
              backgroundImage: "url(bg-yellow-ticket.jpg)",
            }}
            className="w-11/12 sm:h-106 xl:h-90 text-center -rotate-2"
          >
            <div className="flex flex-col sm:flex-row-reverse pl-1 pr-1 sm:pl-10 sm:pr-10  ">
              <div className="relative w-full h-20 sm:w-full sm:h-60 sm:pr-10">
                <div className="relative mt-5 w-full h-full sm:h-3/4 xl:h-full rotate-2">
                  <Image
                    alt=""
                    className="border-8 border-slate-200"
                    style={{ boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)" }}
                    src="/HAVEN FOR CAR LOVERS.png"
                    fill
                  ></Image>
                </div>
              </div>
              <div
                className="sm:pl-5 flex text-left justify-center flex-col pb-20 w-full sm:h-99 [background-position-x:93%] [background-position-y:82%]  sm:[background-position-x:100%] sm:[background-position-y:75%] xl:[background-position-x:50%] xl:[background-position-y:70%]"
                style={{
                  backgroundImage: " url(arrow.png)",
                  backgroundSize: "34% 7%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-4xl xl:text-6xl w-full pt-5 pb-5 font-bold">
                  EXPERIENCE THE THRILL OF THE ROCKET MOTORBIKER
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-3xl pr-3 lh leading-relaxed text-ubigray"
                  style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                >
                  Purchase The RocketMotorbiker today and become a part of the
                  enduring celebration of automotive culture! Accessible on
                  PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One, and
                  PC, AppStore, playstore or via a AnrexStore subscription.
                </div>
                <div>
                  <Link className="inline-block btnparent" href="#">
                    <span className="btn">BUY NOW</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
