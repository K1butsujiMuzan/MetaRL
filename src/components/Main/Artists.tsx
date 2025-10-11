import * as React from "react";
import {artists} from "@components/Main/main.data.ts";

const Artists:React.FC = () => {
  return(
    <section className={"flex flex-wrap gap-15 justify-center md:justify-start"}>
      {artists.map((artist) => (
        <figure className={""} key={`artist-${artist.name}`}>
          <img
            src={artist.image}
            alt=""
            width="245"
            height="245"
            loading="lazy"
          />
          <figcaption className={"leading-6 text-white font-dmmono text-center my-5"}>{artist.name}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default Artists