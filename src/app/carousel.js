"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel() {
  const [active_img, setActive_img] = useState(0);
  const list = {
    0: "/home/carousel2.jpg",
    1: "/home/carousel1.png",
    2: "/home/carousel2.jpg",
    3: "/home/carousel1.png",
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
                    background: `
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
                    url(${list[active_img]}) right top / 60% no-repeat
                  `,
                  }}
                  className="firstpic pc hidden"
                ></div>
                <div
                  style={{
                    width: "100%",
                    background: `linear-gradient(0deg, rgb(13, 13, 13) 40%, rgba(13, 13, 13, 0) 60%), 
                      url(${list[active_img]}) center top / 100% no-repeat`,
                  }}
                  className="firstpicmobile mobile"
                ></div>
                <div className=" text-ubiwhite flex flex-col absolute details portrait:items-center justify-center">
                  <h2 className="text-3xl font-bold sm:text-5xl lg:text-5xl mb-3">
                    New Rewards
                  </h2>
                  <p className="text-2xl sm:text-4xl xl:text-2xl mb-3">
                    Be ready to rock the stage with new Rewards!
                  </p>
                  <button
                    className="hover:shadow-[0px_6px_20px_rgba(0,110,245,.4)]"
                    style={{
                      marginBottom: "12px",
                      maxWidth: "150px",
                      minWidth: "100px",
                      height: "35px",
                      borderRadius: "15px",
                      padding: "2px",
                      fontWeight: "bold",
                      fontSize: "13px",
                      background:
                        "linear-gradient(97.77deg, rgb(8, 193, 181) -6.29%, rgb(25, 76, 255) 107.33%)",
                    }}
                  >
                    Redeem me
                  </button>
                </div>
              </div>

              <div className="text-slate-50 flex justify-between absolute items-center left-1/2 w-full -translate-x-1/2 bottom-12">
                <div onClick={back} className="navbtn text-6xl cursor-pointer">
                  {"<"}
                </div>
                <div className="flex justify-center ">
                  <div
                    className={
                      active_img === 0
                        ? "border-2 border-ubiblue rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(0)}
                  >
                    <Image fill src={list[0]} className="rounded-xl" />
                  </div>
                  <div
                    className={
                      active_img === 1
                        ? "border-2 border-ubiblue rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(1)}
                  >
                    <Image fill src={list[1]} className="rounded-xl" />
                  </div>
                  <div
                    className={
                      active_img === 2
                        ? "border-2 border-ubiblue rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative mr-2 imgcontrol hover:-translate-y-2 transition ease-in-out cursor-pointer delay-50 "
                    }
                    onClick={() => setActive_img(2)}
                  >
                    <Image fill src={list[2]} className="rounded-xl" />
                  </div>
                  <div
                    className={
                      active_img === 3
                        ? "border-2 border-ubiblue rounded-xl relative cursor-pointer shadow-[0_5px_60px_-15px_rgba(0,0,255,3)] imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 "
                        : "relative imgcontrol hover:-translate-y-2 transition ease-in-out delay-50 cursor-pointer"
                    }
                    onClick={() => setActive_img(3)}
                  >
                    <Image fill src={list[3]} className="rounded-xl" />
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
