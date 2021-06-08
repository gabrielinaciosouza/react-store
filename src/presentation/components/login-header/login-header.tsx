import React, { memo } from 'react'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>

      <h1>Bem-vindo!</h1>
      <h2>Entre para continuar</h2>
    </header>
  )
}

export default memo(LoginHeader)
