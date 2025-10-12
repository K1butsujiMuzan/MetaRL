import * as React from "react"
import Hero from "@components/Main/Hero.tsx"
import Collection from "@components/Main/Collection.tsx"
import Scroller from "@components/ui/Scroller/Scroller.tsx";
import Artists from "@components/Main/Artists.tsx";
import Story from "@components/Main/Story.tsx";
import GIta from "@components/Main/GIta.tsx";

const Main: React.FC = () => {
  return(
    <main className={'bg-black'}>
      <div className={"container px-4 mx-auto flex flex-col gap-20 lg:gap-30"}>
        <Hero />
        <Collection/>
        <Scroller text={"artist"}/>
        <Artists/>
        <Story/>
        <GIta/>
      </div>
    </main>
  )
}

export default Main