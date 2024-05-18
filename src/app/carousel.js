"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [active_img, setActive_img] = useState(0);
  const list = {
    0: [
      "/home/Rocket_MotorBiker.png",
      "Rocket Motorbiker",
      "Its show time in rocker",
      "#",
    ],
    1: ["/home/Vortex.png", "Vortex", "Kill your enemy and get the prize", "#"],
    2: [
      "/home/Helenic_Conquest.png",
      "Helenic conquest",
      "Build your castle, defend it, attack, and upgrade",
      "#",
    ],
    3: [
      "/home/Tropical_Havoc.png",
      "Tropical Havoc",
      "Welcome to our fantastic island, where nothing makes sense",
      "#",
    ],
  };
  const gradient_list = {
    0: [
      `url("home/circlecarousel2.avif") left top no-repeat, 
        linear-gradient(0deg, rgb(13, 13, 13) 11.54%, rgba(13, 13, 13, 0) 42.55%), 
        radial-gradient(24% 110% at 41% 0%, rgba(1, 8, 73, 0.5) 0%, rgba(5, 0, 36, 0) 100%), 
        radial-gradient(45% 125% at 0% 96%, rgb(18, 63, 84) 0%, rgba(19, 64, 87, 0) 100%), 
        radial-gradient(19% 65% at 0% 0%, rgb(0, 71, 87) 0%, rgba(0, 36, 26, 0) 100%), 
        linear-gradient(90deg, rgb(13, 13, 13) 45.36%, rgba(36, 36, 36, 0) 57.45%), 
        url(${list[active_img][0]}) right top / 60% no-repeat`,
      "linear-gradient(97.77deg, rgb(8, 193, 181) -6.29%, rgb(25, 76, 255) 107.33%)",
    ],
    1: [
      `
        url("home/circlecarousel.avif") left top no-repeat,
        linear-gradient(0deg, rgb(13, 13, 13) 11.54%, rgba(13, 13, 13, 0) 42.55%),
        radial-gradient(
          54% 115% at 33% -5%,
          rgba(255, 0, 184, 0.2) 0%,
          rgba(36, 0, 255, 0) 100%
        ),
        radial-gradient(
          45% 125% at 0% 96%,
          rgba(255, 92, 0, 0.2) 0%,
          rgba(255, 61, 0, 0) 100%
        ),
        radial-gradient(
          19% 65% at 0% 0%,
          rgba(255, 0, 61, 0.15) 0%,
          rgba(221, 0, 0, 0) 100%
        ),
        linear-gradient(90deg, rgb(13, 13, 13) 45.36%, rgba(36, 36, 36, 0) 57.45%),
        url(${list[active_img][0]}) right top / 60% no-repeat
`,
      "linear-gradient(115.01deg, rgb(228, 150, 33) 5.43%, rgb(222, 22, 79) 100%)",
    ],
    2: [
      `url("home/circlecarousel2.avif") left top no-repeat, 
        linear-gradient(0deg, rgb(13, 13, 13) 11.54%, rgba(13, 13, 13, 0) 42.55%), 
        radial-gradient(24% 110% at 41% 0%, rgba(1, 8, 73, 0.5) 0%, rgba(5, 0, 36, 0) 100%), 
        radial-gradient(45% 125% at 0% 96%, rgb(18, 63, 84) 0%, rgba(19, 64, 87, 0) 100%), 
        radial-gradient(19% 65% at 0% 0%, rgb(0, 71, 87) 0%, rgba(0, 36, 26, 0) 100%), 
        linear-gradient(90deg, rgb(13, 13, 13) 45.36%, rgba(36, 36, 36, 0) 57.45%), 
        url(${list[active_img][0]}) right top / 60% no-repeat`,
      "linear-gradient(97.77deg, rgb(8, 193, 181) -6.29%, rgb(25, 76, 255) 107.33%)",
    ],
    3: [
      `
        url("home/circlecarousel.avif") left top no-repeat,
        linear-gradient(0deg, rgb(13, 13, 13) 11.54%, rgba(13, 13, 13, 0) 42.55%),
        radial-gradient(
          54% 115% at 33% -5%,
          rgba(255, 0, 184, 0.2) 0%,
          rgba(36, 0, 255, 0) 100%
        ),
        radial-gradient(
          45% 125% at 0% 96%,
          rgba(255, 92, 0, 0.2) 0%,
          rgba(255, 61, 0, 0) 100%
        ),
        radial-gradient(
          19% 65% at 0% 0%,
          rgba(255, 0, 61, 0.15) 0%,
          rgba(221, 0, 0, 0) 100%
        ),
        linear-gradient(90deg, rgb(13, 13, 13) 45.36%, rgba(36, 36, 36, 0) 57.45%),
        url(${list[active_img][0]}) right top / 60% no-repeat
`,
      "linear-gradient(115.01deg, rgb(228, 150, 33) 5.43%, rgb(222, 22, 79) 100%)",
    ],
  };
  function next() {
    if (active_img < 3) setActive_img(active_img + 1);
    else setActive_img(0);
  }
  function back() {
    if (active_img > 0) setActive_img(active_img - 1);
    else setActive_img(3);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 3000);

    return () => clearInterval(interval);
  }, [active_img]);

  return (
    <div className="content">
      <section className="sec relative">
        <div className="relative h-full">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <section className="absolute top-0 bottom-0 left-0 right-0 block">
              <div
                className={
                  active_img === 0 ? "relative h-full" : "relative h-full "
                }
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: gradient_list[active_img],
                  }}
                  className="firstpic pc hidden"
                ></div>
                <div
                  style={{
                    width: "100%",
                    background: `linear-gradient(0deg, rgb(13, 13, 13) 40%, rgba(13, 13, 13, 0) 60%), 
                      url(${list[active_img][0]}) center top / 100% no-repeat`,
                  }}
                  className="firstpicmobile mobile"
                ></div>
                <div className=" text-ubiwhite flex flex-col absolute details portrait:items-center justify-center">
                  <h2 className="text-3xl font-bold lg:text-5xl mb-3">
                    {list[active_img][1]}
                  </h2>
                  <p className="text-xl xl:text-2xl mb-3">
                    {list[active_img][2]}
                  </p>
                  <a
                    className="hover:shadow-[0px_6px_20px_rgba(0,110,245,.4)]"
                    href={list[active_img][3]}
                    style={{
                      marginBottom: "12px",
                      maxWidth: "150px",
                      minWidth: "100px",
                      textAlign: "center",
                      height: "35px",
                      borderRadius: "15px",
                      padding: "7px",
                      fontWeight: "bold",
                      fontSize: "13px",
                      background: gradient_list[active_img][1],
                    }}
                  >
                    Buy now
                  </a>
                </div>
              </div>

              <div className="text-slate-50 flex  justify-between absolute items-center left-1/2 w-full -translate-x-1/2 bottom-12">
                <div onClick={back} className="navbtn text-6xl cursor-pointer">
                  {"<"}
                </div>
                <div className="flex justify-center ">
                  <div
                    className={
                      active_img === 0
                        ? "border-2 border-ubiblue mr-4 landscape:mr-8 ml-5 landscape:ml-8 rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] mx-2 imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative mx-2 imgcontrol mr-4 landscape:mr-8 ml-5 landscape:ml-8 hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(0)}
                  >
                    <Image
                      fill
                      alt=""
                      src={list[0][0]}
                      className="rounded-xl"
                    />
                  </div>
                  <div
                    className={
                      active_img === 1
                        ? "border-2 border-ubiblue mr-4 landscape:mr-8 rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative imgcontrol mr-4 landscape:mr-8 hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(1)}
                  >
                    <Image
                      fill
                      alt=""
                      src={list[1][0]}
                      className="rounded-xl"
                    />
                  </div>
                  <div
                    className={
                      active_img === 2
                        ? "border-2 border-ubiblue mr-4 landscape:mr-8 rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative mr-4 landscape:mr-8 imgcontrol hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(2)}
                  >
                    <Image
                      fill
                      alt=""
                      src={list[2][0]}
                      className="rounded-xl"
                    />
                  </div>
                  <div
                    className={
                      active_img === 3
                        ? "border-2 border-ubiblue rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)]  imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 cursor-pointer"
                    }
                    onClick={() => setActive_img(3)}
                  >
                    <Image
                      fill
                      alt=""
                      src={list[3][0]}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div onClick={next} className="navbtn cursor-pointer text-6xl">
                  {">"}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
