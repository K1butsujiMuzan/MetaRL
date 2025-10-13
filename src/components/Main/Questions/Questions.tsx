import * as React from "react";
import wave2 from "@assets/images/waves/wave2.png"
import {questionsData} from "@components/Main/Questions/questions.data.ts";

const Questions: React.FC = () => {
  return (
    <section className={"flex flex-col gap-6 mx-auto lg:mx-0 lg:flex-row lg:justify-between"}>
      <div className={"flex flex-col items-center text-center justify-between gap-4 lg:text-left lg:items-start"}>
        <h2
          className={"text-2xl leading-10 uppercase font-audiowide max-w-88 md:text-38 md:leading-11.5"}
        >
          <span className={"text-white"}>Frequently</span>
          <span className={"text-gray-400"}> asked</span>
          <span className={"text-white"}> questions</span>
        </h2>
        <img
          src={wave2}
          alt=""
          width="360"
          height="360"
          loading="lazy"
        />
      </div>
      <ul className={"text-white max-w-145 bg-gray-900 py-7 flex flex-col gap-14"}>
        {questionsData.map((question, index) => (
          <li
            key={`question-${index}`}
            className={"px-8 flex flex-col gap-6"}
          >
            <div className={"flex justify-between items-start gap-4"}>
              <span className={"font-dmmono leading-6"}>{question.title}</span>
              <span className={"block shrink-0 w-4.5 aspect-square bg-white"}></span>
            </div>
            <p className={"text-xs text-gray-500 leading-4.5"}>{question.information}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Questions