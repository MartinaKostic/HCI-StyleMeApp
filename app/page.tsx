"use client";
import quiz from "../public/04.png";
import style from "../public/06.png";
import blog from "../public/02.png";
import us from "../public/us.jpg";
import tennis from "../public/tennis.jpg";
import dress from "../public/dress.jpg";
import colorful from "../public/colorful.jpg";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-3 h-128 text-center">
        <div className=" grid grid-row content-center bg-green bg-opacity-30">
          <div className="flex justify-center">
            <Image src={quiz} alt="quiz" className="h-52 w-auto " />
          </div>
          <h1 className="text-3xl ">Take a quiz</h1>
          <div className="flex justify-center">
            <button className="border border-text_color m-10 h-10 w-[250px]">
              Go to the section
            </button>
          </div>
        </div>
        <div className="grid gird-row content-center  bg-orange bg-opacity-30">
          <div className="flex justify-center">
            <Image src={style} alt="quiz" className="h-52 w-auto" />
          </div>
          <h1 className="text-3xl ">Style Inspo</h1>
          <div className="flex justify-center">
            <button className="border border-text_color m-10 h-10 w-[250px]">
              Go to the section
            </button>
          </div>
        </div>
        <div className="grid gird-row content-center  bg-blue bg-opacity-30 z-10">
          <div className="flex justify-center">
            <Image src={blog} alt="quiz" className="h-52 w-auto" />
          </div>
          <h1 className="text-3xl ">Blog</h1>
          <div className="flex justify-center">
            <button className="border border-text_color m-10 h-10 w-[250px] relative hover-button">
              <span className="z-10">Go to the section</span>
              {/* radi ovoga ispod je useclient */}
              <style jsx>{`
                .hover-button::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-color: transparent;
                  transform: translate(0, 0);
                  transition: transform 0.4s ease;
                  z-index: 1;
                }
                .hover-button:hover::before {
                  transform: translate(-20px, +10px);
                  background-color: #fffa77;
                  z-index: -1;
                }
              `}</style>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10">
        <div className="bg-pink rounded-full h-[32rem] w-[32rem]  grid content-center  my-32 z-1 col-start-2 ">
          <div className="absolute mt-32">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              About us
            </h1>
          </div>

          <p className="text-left px-5">
            We are two students from Split. Fashion is our passion so we decided
            to make this website to help you find your style. We strongly
            believe that every woman deserves to know which clothing pieces fits
            her body type the best.
          </p>
        </div>
        <div className="col-start-5 col-end-10">
          <Image src={us} alt="us" className="h-96 w-auto my-52" />
        </div>
      </div>
      <div className="grid grid-cols-10">
        <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem] col-start-2">
          New blog posts
        </h1>
      </div>
      <div className="grid grid-cols-10 p-8 mb-48">
        <div className="col-start-2 col-end-4 relative">
          <a href="/" className="block w-full h-60">
            <Image src={tennis} alt="tennis" className="h-60 object-cover" />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-70 transition ease-in-out duration-700 hover:text-3xl "
              style={{ transition: "font-size 0.2s ease-in-out" }}
            >
              Tenniscore trend
            </div>
          </a>
        </div>

        <div className="col-start-5 col-end-7">
          <Image src={colorful} alt="colorful" className="h-60 object-cover" />
        </div>

        <div className=" col-start-8 col-end-10">
          <Image src={dress} alt="dress" className=" h-60  object-cover" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
