import * as React from "react";
import gita from "@assets/images/backgrounds/gita.png"

const GIta: React.FC = () => {
  return(
    <section>
      <img
        className={"w-full h-auto object-cover"}
        src={gita}
        alt=""
        width="1440"
        height="240"
        loading="lazy"
      />
    </section>
  )
}

export default GIta