import React from 'react'
import Link from 'next/link'
import './style.css'

function Registration() {
  return (
    <div className="auth-page">
        <div className="auth-page_content">
            <div className="content_left">
              <h1>Зарегистрироваться</h1>
              <input placeholder="Введите вашу почту" type="email"></input>
              <input placeholder="Придумайте логин" type="text"></input>
              <input placeholder="Придумайте пароль" type="password"></input>
              <button
                className={"button button_filled button_large"}
              >Зарегистрироваться</button>
              <div className="text-link">
                <p>Уже есть аккаунт?</p>
                <Link href={'/login'} className={"navlink"}>
                  Войти
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

export default Registration