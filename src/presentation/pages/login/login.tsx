import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/jpg;base64,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" />
        <h1>Loja Virtual</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail"/>
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha"/>
          <span className={Styles.status}>🔴</span>
        </div>

        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}/>
    </div>
  )
}

export default Login
