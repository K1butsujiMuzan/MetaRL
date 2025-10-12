import logo from '@assets/images/logo/Logo.svg'
import * as React from 'react'

const Logo: React.FC = () => {
  return (
    <a href={'#'}>
      <img width={123} height={32} src={logo} alt={'logo'} />
    </a>
  )
}

export default Logo
