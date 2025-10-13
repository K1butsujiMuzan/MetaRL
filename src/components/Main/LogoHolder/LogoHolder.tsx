import * as React from "react";
import {logoList} from "@components/Main/LogoHolder/logoHolder.data.ts";

const LogoHolder: React.FC = () => {
  return(
    <section className={"flex flex-col items-center gap-15 relative"}>
      <h2
        className={"text-2xl leading-10 uppercase font-audiowide md:text-38 md:leading-11.5 text-white z-20"}
      >
        Our partners
      </h2>
      <ul className={"grid md:grid-cols-2 xl:grid-cols-3 gap-y-15 gap-x-5 w-full z-20"}>
        {logoList.map((logo, index) => (
          <li key={`logo-${index}`} className={"flex justify-center"}>
            <img
              src={logo.image}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LogoHolder