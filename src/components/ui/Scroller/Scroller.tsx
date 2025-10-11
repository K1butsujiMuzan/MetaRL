import * as React from "react";

interface Props {
  text: string
}

const Scroller: React.FC<Props> = ({text}) => {
  return(
    <section className={"container mx-auto"}>
      <ul className={"flex text-7xl text-80 leading-22 font-audiowide uppercase"}>
        {[...Array(3)].map((_, index) => (
          <li className={"text-white"} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Scroller