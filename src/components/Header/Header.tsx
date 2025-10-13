import * as React from 'react'
import Logo from '@components/ui/Logo/Logo.tsx'
import Socials from '@components/ui/Socials/Socials.tsx'
import HeaderLinks from '@components/Header/HeaderLinks.tsx'
import HeaderBurger from '@components/Header/HeaderBurger.tsx'

const Header: React.FC = () => {
  return (
    <header className={'bg-black px-4 sticky top-0 z-30'}>
      <div
        className={
          'container pt-6 md:pt-12 pb-3 flex gap-x-10 justify-between mx-auto items-center max-w-290 relative'
        }
      >
        <Logo />
        <div className={'md:flex justify-between flex-1 items-center hidden'}>
          <HeaderLinks />
          <Socials className={"justify-center"}/>
        </div>
        <HeaderBurger />
      </div>
    </header>
  )
}

export default Header
