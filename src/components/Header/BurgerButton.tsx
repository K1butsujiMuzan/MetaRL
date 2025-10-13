import * as React from 'react'

interface Props {
  onClick: () => void
  isOpen: boolean,
  ref: React.Ref<HTMLButtonElement>
}

const BurgerButton: React.FC<Props> = ({ onClick, isOpen, ref }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent md:hidden w-8 aspect-square absolute flex justify-center z-50 right-0`}
      aria-label={isOpen ? 'Закрыть бургер меню' : 'Открыть бургер меню'}
      ref={ref}
    >
      <span
        className={`block absolute bg-white w-full h-0.5 rounded ${isOpen ? '-rotate-45 top-1/2' : 'top-0'} transition-transform duration-300`}
      />
      <span
        className={`absolute bg-white h-0.5 rounded block top-1/2 -translate-y-1/2 ${isOpen ? 'w-0' : 'w-full'} transition-all duration-300`}
      />
      <span
        className={`block absolute bg-white w-full h-0.5 rounded bottom-0 ${isOpen ? 'rotate-45 top-1/2' : 'translate-y-0'} transition-transform duration-300`}
      />
    </button>
  )
}

export default BurgerButton