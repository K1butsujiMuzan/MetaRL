import * as React from "react";
import circle from "@assets/images/backgrounds/circle.svg";

interface Props {
  className?: string
}

const Circle: React.FC<Props> = ({className}) => {
  return (
    <img
      aria-hidden={true}
      src={circle}
      alt=""
      width="672"
      height="672"
      loading="lazy"
      className={`absolute z-10 ${className} h-1/2 w-1/2 max-w-168 max-h-168 pointer-events-none`}
    />
  )
}

export default Circle