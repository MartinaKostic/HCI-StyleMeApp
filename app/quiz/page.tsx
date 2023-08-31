"use client";
import quizimage from "@/public/04.png";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import React from "react";
import globalStyles from "@/utils/global";

export default function Quiz() {
  //ubacit jos krugova
  const [quiz, setQuiz] = React.useState([]);

  //dohvati sva pitanja
  React.useEffect(() => {
    refetchQuiz();
  }, []);

  function refetchQuiz() {
    axios.get("http://localhost:3003/quiz").then((res) => {
      setQuiz(res.data);
    });
  }

  return (
    <div>
      <Header></Header>
      <div className="absolute bg-pink rounded-full h-[20rem] w-[20rem] -top-24 -left-12"></div>
      <div className="flex justify-center m-5">
        <div className="absolute bg-pink rounded-full h-[25rem] w-[25rem] ml-28"></div>
        <div className=" mt-32 z-10 grid grid-cols-4">
          <div className="col-start-2 col-span-2 flex justify-center">
            <h1 className="bg-hotpink text-center text-2xl py-1 w-[36rem]">
              Take a quiz
            </h1>
          </div>
          <div className="col-start-2 col-span-2">
            <p className="text-center mt-10">
              Take this easy quiz and we will show you some of the most <br />
              flattering clothes for your shape this season, and share some
              <br />
              valuable tips to help you confidently shop for clothes that
              <br /> work for you, so you enjoy getting dressed!
            </p>
          </div>
          <div className="p-5">
            <Image src={quizimage} alt="quiz" className="h-52 w-auto" />
          </div>
        </div>
      </div>

      {quiz.map((question: any) => (
        <div key={question.index} className="my-10 flex flex-col items-center ">
          <h1 className="bg-hotpink text-center text-2xl py-1 w-5/6 mb-5">
            {question.questionText}
          </h1>
          {question.answers.map((answer: any) => (
            <button
              key={answer.index}
              className="border border-text_color flex p-3 m-3 w-3/5 relative hover-button"
            >
              {answer.answerText}
              <style jsx global>
                {globalStyles}
              </style>
            </button>
          ))}
        </div>
      ))}
      {/* <button className="border border-text_color flex p-3 m-3 w-3/5 relative hover-button">
          Answer1
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
              transition: transform 0.5s ease;
              z-index: 1;
            }
            .hover-button:hover::before {
              transform: translate(-20px, +10px);
              background-color: #fffa77;
              z-index: -1;
            }
          `}</style>
        </button>
        <button className="border border-text_color flex p-3 m-3 w-3/5 relative hover-button">
          Answer4
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
              transition: transform 0.5s ease;
              z-index: 1;
            }
            .hover-button:hover::before {
              transform: translate(-20px, +10px);
              background-color: #fffa77;
              z-index: -1;
            }
          `}</style>
        </button>
        <button className="border border-text_color flex p-3 m-3 w-3/5 relative hover-button">
          Answer2
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
              transition: transform 0.5s ease;
              z-index: 1;
            }
            .hover-button:hover::before {
              transform: translate(-20px, +10px);
              background-color: #fffa77;
              z-index: -1;
            }
          `}</style>
        </button>
        <button className="border border-text_color flex p-3 m-3 w-3/5 relative hover-button">
          Answer3
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
              transition: transform 0.5s ease;
              z-index: 1;
            }
            .hover-button:hover::before {
              transform: translate(-20px, +10px);
              background-color: #fffa77;
              z-index: -1;
            }
          `}</style>
        </button> */}

      <Footer></Footer>
    </div>
  );
}
