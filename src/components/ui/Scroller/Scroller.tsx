import * as React from "react";

interface Props {
  text: string
}

const Scroller: React.FC<Props> = ({text}) => {
  return(
    <section className={"bg-black overflow-x-auto overflow-y-hidden scroller"}>
      <ul className={"flex text-5xl text-white leading-12 md:text-80 md:leading-22 font-audiowide uppercase gap-50 justify-between whitespace-nowrap"}>
        {[...Array(8)].map((_, index) => (
          <li className={"shrink-0"} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Scroller