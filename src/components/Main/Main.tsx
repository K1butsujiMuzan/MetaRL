import * as React from "react"
import Hero from "@components/Main/Hero.tsx"
import Collection from "@components/Main/Collection.tsx"
import Scroller from "@components/ui/Scroller/Scroller.tsx";
import Artists from "@components/Main/Artists.tsx";

const Main: React.FC = () => {
  return(
    <main className={'bg-black'}>
      <div className={"container px-4 mx-auto flex flex-col gap-20 lg:gap-30"}>
        <Hero />
        <Collection/>
        <Scroller text={"artist"}/>
        <Artists/>
      </div>
    </main>
  )
}

export default Main