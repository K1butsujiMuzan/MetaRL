import * as React from 'react'
import HeaderLinks from '@components/Header/HeaderLinks.tsx'
import Socials from '@components/ui/Socials/Socials.tsx'
import BurgerButton from '@components/Header/BurgerButton.tsx'
import {useCallback, useEffect, useRef, useState} from 'react'
import ReactFocusLock from "react-focus-lock";

const HeaderBurger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const burgerRef= useRef<HTMLButtonElement>(null)

  const closeBurger = () => setIsOpen(false)

  const toggleBurger = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const checkScreen = () => media.matches && closeBurger()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  useEffect(() => {
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeBurger()
      }
    }
    window.addEventListener('keydown', closeOnEsc)
    return () => window.removeEventListener('keydown', closeOnEsc)
  }, [])

  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  return (
    <>
      <BurgerButton onClick={toggleBurger} isOpen={isOpen} ref={burgerRef}/>
      {isOpen && (
        <ReactFocusLock returnFocus={true} shards={burgerRef.current ? [burgerRef.current] : []}>
          <div
            className={`fixed inset-0 backdrop-blur-xs z-30 ${isOpen ? 'opacity-100' : 'opacity-0 delay-100 pointer-events-none'} md:hidden transition-opacity duration-300`}
            onClick={toggleBurger}
          >
            <div
              className={`w-1/2 bg-black h-full right-0 absolute overflow-y-auto flex flex-col justify-center gap-10 px-1 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
              onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
              <HeaderLinks onLinkClick={closeBurger} />
              <Socials onClick={closeBurger} className={"justify-center"}/>
            </div>
          </div>
        </ReactFocusLock>
      )}
    </>
  )
}

export default HeaderBurger
