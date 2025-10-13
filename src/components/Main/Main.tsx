import * as React from "react"
import Hero from "@components/Main/Hero.tsx"
import Collection from "@components/Main/Collection.tsx"
import Scroller from "@components/ui/Scroller/Scroller.tsx";
import Artists from "@components/Main/Artists/Artists.tsx";
import Story from "@components/Main/Story/Story.tsx";
import RoadMap from "@components/Main/RoadMap/RoadMap.tsx";
import Team from "@components/Main/Team/Team.tsx";
import Questions from "@components/Main/Questions/Questions.tsx";
import LogoHolder from "@components/Main/LogoHolder/LogoHolder.tsx";
import Discord from "@components/Main/Discord.tsx";

const Main: React.FC = () => {
  return(
    <main className={'bg-black'}>
      <div className={"container px-4 mx-auto flex flex-col gap-20 lg:gap-30"}>
        <Hero />
        <Collection/>
        <Scroller text={"artist"}/>
        <Artists/>
        <Story/>
        <RoadMap/>
        <LogoHolder/>
        <Questions/>
        <Scroller text={"team"}/>
        <Team/>
        <Discord/>
      </div>
    </main>
  )
}

export default Main