import Header from "./components/Header/Header.tsx";
import Hero from "@components/Main/Hero.tsx";

const App = () => {
  return (
    <>
      <Header/>
      <main className={"bg-black"}>
        <Hero/>
      </main>
    </>
  )
}

export default App
