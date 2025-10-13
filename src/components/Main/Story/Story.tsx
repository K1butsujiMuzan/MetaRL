import * as React from "react";
import {
  type IStoryInformation,
  storyButtons,
  storyInformation
} from "@components/Main/Story/story.data.ts";
import {useMemo, useRef, useState} from "react";

const Story: React.FC = () => {
  const buttonRef = useRef<(HTMLButtonElement | null)[]>([])
  const [currentStory, setCurrentStory] = useState<number>(0)

  const activeStory : IStoryInformation | undefined = useMemo(() =>
    storyInformation[currentStory],
    [currentStory]
  )

  return(
    <section className={"flex flex-col items-center gap-15"}>
      <h2
        className={"text-2xl leading-10 uppercase font-audiowide md:text-38 md:leading-11.5"}
        id={"storyTabList"}
      >
        <span className={"text-white"}>mrl.</span>
        <span className={"text-gray-400"}>the story.</span>
      </h2>
      <div
        className={"flex flex-col font-dmmono lg:flex-row w-full justify-center"}
        role={"tablist"}
        aria-labelledby={"storyTabList"}
      >
        <div
          className={"flex leading-4 lg:flex-col sm:items-start"}
          onKeyDown={(event: React.KeyboardEvent) => {
            if(event.key === "ArrowRight") {
              const newIndex: number = currentStory === storyButtons.length -1 ? 0 : currentStory + 1
              setCurrentStory(newIndex)
              buttonRef.current[newIndex]?.focus()
            }else if (event.key === "ArrowLeft") {
              const newIndex = currentStory === 0 ? storyButtons.length - 1 : currentStory - 1
              setCurrentStory(newIndex)
              buttonRef.current[newIndex]?.focus()
            }
          }}
        >
          {storyButtons.map((button, index) => (
            <button
              role={"tab"}
              key={button.text}
              className={`${currentStory === index ? "text-toxic-400 bg-gray-900" : "text-white"} w-1/3 pt-6 lg:pr-16 pb-4 sm:pb-8 lg:pl-7 transition duration-300 xl:pr-34 lg:w-full`}
              onClick={() => {
                setCurrentStory(index)
              }}
              aria-selected={index === currentStory}
              tabIndex={index === currentStory ? 0 : -1}
              ref={el => {
                if(el) buttonRef.current[index] = el
              }}
            >
              {button.text}
            </button>
          ))}
        </div>
        <div
          role={"tabpanel"}
          className={"flex flex-col gap-10 items-start bg-gray-900 p-4 sm:p-15 lg:flex-row"}
        >
          {activeStory && (
            <>
              <img
                src={activeStory.image}
                alt=""
                width="172"
                height="253"
                loading="lazy"
              />
              <div className={"max-w-136 flex flex-col gap-8"}>
                <h3
                  className={"text-toxic-400 text-xl leading-8 font-dmmono border-toxic-400 border-l-2 pl-5.5"}
                >
                  {activeStory.title}
                </h3>
                <div className={"text-white font-inter leading-6.5"}>
                  {activeStory.information.map((information, index) => (
                    <p key={`${activeStory.id}-info${index}`}>{information}</p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        </div>
    </section>
  )
}

export default Story