import { links } from '@components/Header/headerLinks.data.ts'
import BaseLink from '@components/ui/BaseLink/BaseLink.tsx'
import * as React from 'react'

interface Props {
  onLinkClick?: () => void
}

const HeaderLinks: React.FC<Props> = ({ onLinkClick }) => {
  return (
    <nav>
      <ul className={'flex gap-10 flex-col text-center md:flex-row'}>
        {links.map((link, index) => (
          <li key={index}>
            <BaseLink link={link} onClick={onLinkClick} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderLinks