import * as React from "react"
import Hero from "@components/Main/Hero.tsx"
import Collection from "@components/Main/Collection.tsx"
import Scroller from "@components/ui/Scroller/Scroller.tsx";

const Main: React.FC = () => {
  return(
    <main className={'bg-black'}>
      <div className={"container px-4 mx-auto flex flex-col gap-20 lg:gap-30"}>
        <Hero />
        <Collection/>
        <Scroller text={"artist"}/>
      </div>
    </main>
  )
}

export default Main