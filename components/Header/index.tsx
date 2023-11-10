import React from "react";
import "./style.css";
import Link from "next/link";

function Header() {
  return (
    <header className="navbar">
      <div className="navlinks">
        <Link className="navlink" href={'/'}>
          Домашняя страница
        </Link>
      </div>
      <div className="navbuttons">
        <Link href={'/'}
          className="button button_text button_medium"
        >
          Войти
        </Link>
        <Link href={'/'}
          className="button button_filled button_medium"
        >
          Зарегистрироваться
        </Link>
      </div>
    </header>
  );
}

export default Header;
