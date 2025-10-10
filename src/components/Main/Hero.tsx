import * as React from 'react'
import heroBG from '@assets/images/backgrounds/hero.png'

const Hero: React.FC = () => {
  return (
    <section
      className={`container bg-contain bg-right bg-local bg-no-repeat px-4 pt-11 md:pt-33 pb-8.5 md:pb-26 flex flex-col gap-20 md:gap-29 items-start mx-auto`}
      style={{ backgroundImage: `url(${heroBG})` }}
    >
      <div className={'flex flex-col gap-11'}>
        <h1
          className={
            'text-3xl leading-10 md:text-52 text-white font-audiowide uppercase max-w-121 md:leading-15'
          }
        >
          meta record label
        </h1>
        <p className={'text-white font-inter text-base leading-6.5 max-w-85'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <a
        href={'#'}
        className={
          'bg-toxic-400 px-13.5 pt-4 pb-7 font-dmmono text-base leading-4 hover:bg-black hover:text-toxic-400 hover:outline hover:outline-toxic-400 active:scale-97 transition-all duration-300'
        }
      >
        Learn More
      </a>
    </section>
  )
}

export default Hero
