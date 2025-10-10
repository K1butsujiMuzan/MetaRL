import * as React from 'react'

interface Props {
  link: string
  onClick?: () => void
}

const BaseLink: React.FC<Props> = ({ link, onClick }) => {
  return (
    <a
      className={
        'text-white font-dmmono text-base leading-4 hover:text-toxic-400 active:text-toxic-400 transition-colors duration-300'
      }
      href={'#'}
      onClick={onClick}
    >
      {link}
    </a>
  )
}

export default BaseLink
