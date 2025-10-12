import * as React from "react";
import gita from "@assets/images/backgrounds/gita.png"
import {roadMapData} from "@components/Main/RoadMap/roadMap.data.ts";
import RoadMapCard from "@components/Main/RoadMap/RoadMapCard.tsx";
import Circle from "@components/Main/RoadMap/Circle.tsx";

const RoadMap: React.FC = () => {
  return(
    <section className={"flex flex-col gap-20 lg:gap-30 items-center relative"}>
      <Circle className={"top-0 left-0"}/>
      <Circle className={"top-1/3 right-0"}/>
      <Circle className={"bottom-1/4 sm:bottom-0 left-0"}/>
      <img
        className={"w-full h-auto object-cover z-20"}
        src={gita}
        alt=""
        width="1440"
        height="240"
        loading="lazy"
      />
      <h2
        className={"text-2xl leading-10 uppercase font-audiowide md:text-38 md:leading-11.5 text-white z-20"}
      >
        Roadmap
      </h2>
      <div className={"flex flex-col items-center gap-14 z-20"}>
        {roadMapData.map((card) => (
          <RoadMapCard
            id={card.id}
            isCompleted={card.isCompleted}
            title={card.title}
            advantages={card.advantages}
            information={card.information}
            image={card.image}
            key={`card-${card.id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default RoadMap