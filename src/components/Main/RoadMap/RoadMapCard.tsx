import * as React from "react";
import type {IRoadMap} from "@components/Main/RoadMap/roadMap.data.ts";

const RoadMapCard: React.FC<IRoadMap> = ({id, isCompleted, title, advantages, information, image}) => {
  return (
    <>
      {id !== 1 && (
        <span className={"block w-0.25 h-10 bg-toxic-400"}></span>
      )}
      <div className={"text-white bg-gray-900 border border-toxic-400 w-full sm:max-w-135"}>
        <div className={"font-dmmono flex gap-3 items-start sm:items-center border-b border-toxic-400 p-3"}>
          <span
            className={`text-28 leading-7 px-4 py-2 ${isCompleted ? "bg-toxic-400 text-black" : "text-toxic-400 border border-toxic-400"}`}
          >
            {id}
          </span>
          <div className={"flex flex-col"}>
            <span className={"text-toxic-400 text-xs leading-3 uppercase tracking-widest"}>Phase {id} {isCompleted ? " - Completed" : ""}</span>
            <h3 className={"leading-7 uppercase"}>{title}</h3>
          </div>
        </div>
        <div className={"px-3 py-7.5 flex flex-col sm:flex-row gap-5 sm:gap-19 items-start"}>
          <div className={"flex flex-col gap-5.5 text-xs"}>
            <ul className={"flex flex-col leading-4 sm:leading-3 gap-2.5 sm:ml-5.5"}>
              {advantages.map((advantage, index) => (
                <li
                  key={`card-${id}-advantage-${index}`}
                >
                  {advantage}
                </li>
              ))}
            </ul>
            <p
              className={"leading-6"}
            >
              {information}
            </p>
          </div>
          <img
            src={image}
            alt=""
            width="129"
            height="129"
            loading="lazy"
            className={"rounded-lg"}
          />
        </div>
      </div>
    </>
  )
}

export default RoadMapCard