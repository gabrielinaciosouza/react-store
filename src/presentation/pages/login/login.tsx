import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Input, FormStatus, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={state}>
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
