import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false

  })

  const [errorState] = useState({
    mainError: '',
    email: '',
    password: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <Input type="email" name="email" placeholder="Email"/>
          <Input type="password" name="password" placeholder="Senha"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Esqueceu a senha?</span>
          <FormStatus/>
        </form>
      </Context.Provider>

    </div>
  )
}

export default Login
