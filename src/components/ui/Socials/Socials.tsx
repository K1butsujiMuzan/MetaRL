import * as React from 'react'
import { socials } from '@components/ui/Socials/socials.data.ts'

interface Props {
  onClick?: () => void
}

const Socials: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={'flex flex-wrap justify-center gap-3'}>
      {socials.map((social, index) => (
        <a href={'#'} key={index} onClick={onClick}>
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
      ))}
    </div>
  )
}

export default Socials
