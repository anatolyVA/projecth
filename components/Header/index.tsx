import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="navbar">
      <div className="navlinks">
        <Link href='/'>
          <Image id="logo" height={100} width={100} alt='' src={'/logo.svg'}></Image>
        </Link>
      </div>
      <div className="navbuttons">
        <Link href='/login'
          className="button button_text button_medium"
        >
          Войти
        </Link>
        <Link href='/registration'
          className="button button_filled button_medium"
        >
          Зарегистрироваться
        </Link>
      </div>
    </header>
  );
}

export default Header;
