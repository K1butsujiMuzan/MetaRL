import * as React from 'react'
import { socials } from '@components/ui/Socials/socials.data.ts'

interface Props {
  onClick?: () => void,
  className?: string
}

const Socials: React.FC<Props> = ({ onClick, className }) => {
  return (
    <ul className={`flex flex-wrap gap-3 items-start ${className}`}>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={'#'} onClick={onClick}>
            <img
              src={social.image}
              alt={social.alt}
              width={40}
              height={40}
              className={
                'hover:scale-105 duration-300 active:scale-97 w-7 h-7 md:w-10 md:h-10'
              }
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
