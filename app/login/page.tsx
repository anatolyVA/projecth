import React from 'react'
import Link from 'next/link'
import './style.css'

function Login() {
  return (
    <div className="auth-page">
        <div className="auth-page_content">
            <div className="content_left">
              <h1>Войти</h1>
              <input placeholder="Введите ваш логин" type="text"></input>
              <input placeholder="Введите ваш пароль" type="password"></input>
              <div className="text-link">
                <p>Забыли пароль?</p>
                <Link href={'/registration'} className={"navlink"}>Восстановить</Link>
              </div>
              <button
                className={"button button_filled button_large"}
              >Войти</button>
              <div className="text-link">
                <p>Нет аккаунта?</p>
                <Link href={'/registration'} className={"navlink"}>
                  Зарегистрироваться
                </Link>
              </div>
            </div>
            <hr style={{ opacity: 0.2 }}></hr>
            <div className="content_right">
              <button
                className={"button button_outlined button_medium"}
              >Войти через Google</button>
              <button
                className={"button button_outlined button_medium"}

              >Войти через VK</button>
              <button
                className={"button button_outlined button_medium"}
              >Войти Яндекс ID</button>
            </div>
        </div>
      </div>
  )
}

export default Login