import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(bg.jpg)",
          backgroundSize: "100% ",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="relative h-80 lg:h-75">
          <div className="absolute h-full  w-full lg:h-full">
            <video
              autoPlay
              muted
              loop
              src="vid1.mp4"
              className=" h-full object-cover w-full"
            ></video>
          </div>

          <div className="flex z-10 relative items-center justify-end flex-col pb-10 h-full">
            <div className="w-2/3 sm:w-1/3 lg:w-2/3 max-w-600">
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
              <div>&#160; FREE TRIAL</div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: "-4%",
              padding: "10% 0 4%",
              position: "relative",
              backgroundImage:
                "url(bg2.png), url(bg2.png), url(bg-black-b.png)",
              backgroundPositionY: "0 , -1%, 100%",
              backgroundPositionX: "-30%, 116%, 0",
              backgroundSize: "33% , 33%, 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="relative "
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "0",
                padding: "10% 0 0",
                background: "url(1.svg) 50% no-repeat",
                backgroundSize: "100%",
              }}
            ></div>
            <div className="flex flex-col items-center landscape:w-11/12 landscape:flex-row landscape:mx-auto max-w-1440">
              <div className="flex items-center m-auto w-full portrait:px-10 landscape:pr-4 landscape:pl-8">
                <Image
                  alt=""
                  className=" border-8 border-slate-200  -rotate-2 w-full"
                  style={{ boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)" }}
                  src="/Motorbiker Home 01.png"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" flex portrait:px-10 justify-center flex-col pb-20 landscape:pl-4 landscape:w-1/2 w-full ">
                <div
                  className="text-5xl xl:text-4xl w-full pt-5 pb-5 font-bold"
                  style={{
                    fontFamily: "DIN-CondBlack,sans-serif",
                  }}
                >
                  IT&apos;S SHOWTIME IN ROCKET
                </div>
                <br />
                <div
                  className="pb-5 text-base w-full xl:text-base lh leading-relaxed text-ubigray"
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
        <div>
          <div
            style={{
              backgroundImage: "url(bg-black2.png), url(bg-black.png)",

              backgroundColor: "#292929",
              backgroundSize: "100% 30%",
              backgroundPosition: "top, bottom",
              backgroundRepeat: "no-repeat",
            }}
            className="relative py-20"
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                marginTop: "-2.8%",
                height: "0",
                padding: "10% 0 0",
                backgroundImage: "url(bg-before2.svg)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col items-center landscape:w-11/12 landscape:flex-row landscape:mx-auto max-w-1440">
              <div className=" flex portrait:px-10 justify-center flex-col landscape:pl-4 landscape:w-3/5 landscape:pr-20 w-full text-slate-50">
                <div className="text-5xl w-full pt-5 pb-5 font-bold">
                  Check out the reviews from critics on The Rocket Motorbiker!
                </div>
                <br />
                <div
                  className="pb-1 text-base w-full xl:text-base lh leading-relaxed "
                  style={{
                    fontFamily: "din-pro,Helvetica,sans-serif",
                    lineHeight: "2",
                  }}
                >
                  Secure your pass and be part of a year-long celebration
                  tailored for automobile enthusiasts of all kinds:
                  <br /> Embark on an adventure through a lively Hawaiian
                  open-world, situated on the picturesque island of
                  Ya&apos;Hota.
                  <br />
                  Acquire a vast collection of over 600 vehicles, ranging from
                  cars and boats to planes and bikes. <br />
                  Form alliances with your friends to traverse the world
                  cooperatively or compete against them in demanding PvP modes,
                  accommodating up to 32 players.
                </div>
              </div>
              <div className="relative flex items-center m-auto w-full portrait:px-10 landscape:pr-4 pb-6">
                <div className="playbtn absolute lg:w-16 lg:h-16 h-14 w-14 rotate-2 "></div>
                <Image
                  alt=""
                  className="border-4 lg:border-8 border-transparent rotate-2 w-full"
                  style={{
                    boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    borderImage:
                      "linear-gradient(90deg, #ff1c38 75%, #ffb52d) 10",
                  }}
                  src="/Trailer.png"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="h-65 landscape:h-80">
          <div className="h-full relative text-center">
            <div
              className="rotate-180"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "1",
                width: "100%",
                height: "0",
                padding: "2.5% 0 0",
                backgroundImage: "url(bg-before2.svg)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="relative h-1/2 landscape:h-full"
              style={{
                maskImage: "url(mask.svg)",
                maskSize: "cover",
              }}
            >
              <Image
                alt=""
                className=" h-full w-full"
                src="/MororBiker Wallpaper.png"
                fill
              ></Image>
            </div>

            <div className="absolute mt-10 landscape:top-1/2 landscape:left-1/2 landscape:-translate-x-1/2 landscape:-translate-y-1/2 left-1/5 ">
              <div className="landscape:text-slate-50 font-bold text-5xl landscape:text-5xl pb-5">
                WELCOME TO MOTORFEST
              </div>
              <div className="landscape:text-slate-50 font-bold text-xl landscape:text-2xl">
                Secure your admission to a year-long festival crafted for car
                enthusiasts of all kinds, located on the stunning island of
                Ya&apos;Hota.
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <div className="p-10 relative">
              <div
                className="text-3xl w-min h-min m-auto sm:text-4xl font-bold "
                style={{
                  fontFamily: "DIN-CondBlack, sans-serif",
                  fontStyle: "italic",
                  background: `url(bg2.png) 0 0 no-repeat, url(bg-yellowtxt2.png) 50% 50% no-repeat`,
                  backgroundSize: "30%, 100%",
                  padding: "6% 6% 3%",
                }}
              >
                KEY&#160;HIGHLIGHTS
              </div>
            </div>
            <section className="flex flex-col landscape:w-11/12 landscape:flex-row mx-auto max-w-1440">
              <div className="flex m-auto landscape:w-60% w-full portrait:px-2 landscape:pr-4 landscape:pl-8">
                <Image
                  alt=""
                  className=" border-8 border-slate-200  -rotate-2 w-full"
                  style={{
                    boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    borderImage:
                      "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                  }}
                  src="/MororBiker Wallpaper 02.png"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" flex portrait:px-10 flex-col pb-20 landscape:w-1/2 landscape:pr-7 w-full ">
                <div className="py-10 relative">
                  <div
                    className="text-3xl sm:text-3xl font-bold "
                    style={{
                      fontFamily: "din-pro,Helvetica,sans-serif",
                      background: `url(bg-redtxt2.png) 0 0 no-repeat, url(bg-yellowtxt.png) 50% 50% no-repeat`,
                      backgroundSize: "30%, 100%",
                      padding: "6% 6% 3%",
                    }}
                  >
                    EXPLORE EVERY ASPECT OF CAR CULTURE
                  </div>
                </div>
                <br />
                <div
                  className="pb-5 text-base w-full xl:text-base lh leading-relaxed text-ubigray"
                  style={{
                    fontFamily: "din-pro,Helvetica,sans-serif",
                    padding: "0% 6% 3%",
                  }}
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
              </div>
            </section>
            <section className="flex flex-col landscape:w-11/12 landscape:flex-row-reverse mx-auto max-w-1440">
              <div className="flex m-auto landscape:w-60% w-full portrait:px-2 landscape:pl-4 landscape:pr-8">
                <Image
                  alt=""
                  className=" border-8 border-slate-200  rotate-2 w-full"
                  style={{
                    boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    borderImage:
                      "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                  }}
                  src="/EMBARK ON AN EXHILARATING.png"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" flex portrait:px-10 flex-col pb-20 landscape:w-1/2 landscape:pr-7 w-full ">
                <div className="py-10 relative">
                  <div
                    className="text-3xl sm:text-3xl font-bold "
                    style={{
                      fontFamily: "din-pro,Helvetica,sans-serif",
                      background: `url(bg-redtxt1.png) 0 0 no-repeat, url(bg-yellowtxt.png) 50% 50% no-repeat`,
                      backgroundSize: "15%, 100%",
                      padding: "6% 6% 3%",
                    }}
                  >
                    EMBARK ON AN EXHILARATING JOURNEY THROUGH THE VIBRANT
                    HAWAIIAN OPEN WORLD ALONGSIDE YOUR ROCKET
                  </div>
                </div>
                <br />
                <div
                  className="pb-5 text-base w-full xl:text-base lh leading-relaxed text-ubigray"
                  style={{
                    fontFamily: "din-pro,Helvetica,sans-serif",
                    padding: "0% 6% 3%",
                  }}
                >
                  Prepare yourself for the ultimate driving escapade on the
                  captivating island of Ya'Hota, renowned as the crown jewel of
                  the Hawaiian archipelago.
                </div>
                <div
                  className="pb-5 text-base w-full xl:text-base lh leading-relaxed text-ubigray"
                  style={{
                    fontFamily: "din-pro,Helvetica,sans-serif",
                    padding: "0% 6% 3%",
                  }}
                >
                  Engage in various activities solo or with fellow players:
                  participate in high-octane street races amidst the bustling
                  streets of Honolulu, test your off-road prowess on the rugged
                  slopes of a volcano, or perfect your cornering skills on race
                  tracks. When it's time to unwind, recline on the sun-kissed
                  beaches while behind the wheel of your preferred supercar, or
                  opt for a buggy to navigate the hidden trails of the lush
                  rainforest.
                </div>
              </div>
            </section>
            <section className="flex flex-col landscape:w-11/12 landscape:flex-row mx-auto max-w-1440">
              <div className="flex m-auto landscape:w-60% w-full portrait:px-2 landscape:pr-4 landscape:pl-8">
                <Image
                  alt=""
                  className=" border-8 border-slate-200  -rotate-2 w-full"
                  style={{
                    boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                    borderImage:
                      "linear-gradient(90deg,#ff1c38 75%,#bcff56) 10",
                  }}
                  src="/HAVEN FOR CAR LOVERS.png"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" flex portrait:px-10 flex-col pb-20 landscape:w-1/2 landscape:pr-7 w-full ">
                <div className="py-10 relative">
                  <div
                    className="text-3xl sm:text-3xl font-bold "
                    style={{
                      fontFamily: "din-pro,Helvetica,sans-serif",
                      background: `url(bg-redtxt3.png) 0 0 no-repeat, url(bg-yellowtxt.png) 50% 50% no-repeat`,
                      backgroundSize: "30%, 100%",
                      padding: "6% 6% 3%",
                    }}
                  >
                    ENGAGE IN MOTORBIKER, A CONSTANTLY EVOLVING PARADISE FOR
                    AUTO ENTHUSIASTS
                  </div>
                </div>
                <br />
                <div
                  className="pb-5 text-base w-full xl:text-base lh leading-relaxed text-ubigray"
                  style={{
                    fontFamily: "din-pro,Helvetica,sans-serif",
                    padding: "0% 6% 3%",
                  }}
                >
                  Immerse yourself in a dynamic lineup of events: explore fresh
                  perspectives on car culture with an array of themed campaigns,
                  adrenaline-fueled racing competitions, and diverse competitive
                  live events. Amass a vast collection of iconic vehicles
                  spanning the eras, from classic to contemporary and beyond.
                  From its initial release and into the future, The ROCKER™
                  Motorbiker will continuously present ample chances for you to
                  showcase your expertise, express your individuality, and etch
                  your legacy into the annals of the festival's history.
                </div>
              </div>
            </section>
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
              <div className="flex flex-col portrait:items-center landscape:flex-row m-auto sm:pl-20 sm:pr-20">
                <div className=" w-10/12 mb-5 px-3">
                  <div className="relative pb-4 w-full">
                    <Image
                      alt=""
                      className="border-4 border-slate-200 "
                      style={{
                        boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      }}
                      src="/Epic Rally.png"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div>
                    Join the high-speed, adrenaline-pumping races with up to 28
                    players, where every man is for himself in the ultimate
                    showdown at Motorbiker!
                  </div>
                </div>
                <div className=" w-10/12 mb-5 px-3">
                  <div className="relative pb-4 w-full">
                    <Image
                      alt=""
                      className="border-4 border-slate-200 "
                      style={{
                        boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      }}
                      src="/PEAK CHALLENGE.png"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div>
                    Compete in weekly ranked events and earn top rewards by
                    climbing your way to the summit of the leaderboards.
                  </div>
                </div>
                <div className=" w-10/12 mb-5 px-3">
                  <div className="relative pb-4 w-full">
                    <Image
                      alt=""
                      className="border-4 border-slate-200 "
                      style={{
                        boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      }}
                      src="/STYLE SHOWDOWN.png"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div>
                    Show off your unique flair in the weekly custom show
                    competitions and seize the opportunity to claim exclusive
                    rewards
                  </div>
                </div>
                <div className=" w-10/12 mb-5 px-3">
                  <div className="relative pb-4 w-full">
                    <Image
                      alt=""
                      className="border-4 border-slate-200 "
                      style={{
                        boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)",
                      }}
                      src="/WRECKAGE WARS.png"
                      width={1000}
                      height={1000}
                    />
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
        </div>
        <section>
          <div className="flex justify-center ml-2 mr-2 landscape:m-auto pt-5 pb-5 max-w-1440">
            <div className="ticket w-11/12 text-center -rotate-2">
              <div className="flex flex-col items-center landscape:flex-row-reverse landscape:py-5 pl-0 pr-1 sm:pl-10   ">
                <div className="relative w-full sm:w-full ">
                  <div className="flex items-center relative w-full rotate-2">
                    <Image
                      alt=""
                      className="border-8 border-slate-200 w-full h-full"
                      style={{ boxShadow: "0 .5em 1em 0 rgba(0,0,0,.35)" }}
                      src="/ticket-img.avif"
                      width={1000}
                      height={1000}
                    ></Image>
                  </div>
                </div>
                <div className="sm:pl-2 landscape:py-5 flex landscape:pr-5  text-left justify-center flex-col w-full ">
                  <div className="text-2xl xl:text-3xl w-full py-5 font-bold">
                    EXPERIENCE THE THRILL OF THE ROCKET MOTORBIKER
                  </div>
                  <div
                    className="pb-5 text-base w-full xl:text-xl pr-3 lh leading-relaxed text-ubigray"
                    style={{ fontFamily: "din-pro,Helvetica,sans-serif" }}
                  >
                    Purchase The RocketMotorbiker today and become a part of the
                    enduring celebration of automotive culture! Accessible on
                    PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One, and
                    PC, AppStore, playstore or via a AnrexStore subscription.
                  </div>
                  <div className="relative">
                    <Link className="inline-block btnparent" href="#">
                      <span className="btn">BUY NOW</span>
                    </Link>
                    <div
                      style={{
                        position: "absolute",
                        top: "55%",
                        left: "60%",
                        width: "35%",
                        height: "0",
                        transform: "rotate(15deg)",
                        padding: "13% 0 0",
                        backgroundImage: "url(arrow.png) ",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
