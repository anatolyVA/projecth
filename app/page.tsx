'use client'

import "./style.css";
import Link from "next/link";
import Card from "@/components/Card/index";

export default function Home() {
  const getData = async () => {
    await fetch('/api/tours', {
      method: 'GET'
    })
    
  }
  return (
    <main className="home-page">
      <div className="home-page_hero">
        <div className="home-page_hero-center">
          <h1>Интерактивная карта истории Смоленска</h1>
          <Link className={"button button_filled button_large"} href={"/map"}>
            Исследовать
          </Link>
        </div>
      </div>
      <section className="card-section">
        <header className="card-section-header">
          <button onClick={() => getData()}>
            ХУЯК
          </button>
          <h2>Популярные места и события</h2>
        </header>
        <main className="card-section-body">
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={"../public/map.png"}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
        </main>
      </section>
      <section className="card-section">
        <header className="card-section-header">
          <h2>Популярные экскурсии</h2>
        </header>
        <main className="card-section-body">
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
          <Card name="Успенский собор" type={{type1: 'Церкви и соборы'}} image={'../public/sobor.png'}/>
        </main>
      </section>
      <section className="review-section">
          <div className="review-section_content">
            <h2>Изучайте историю и достопримечательности города</h2>
            <p>Подзаголовок</p>
            <Link href={'/map'} className={"button button_filled button_medium"}>
              Перейти
            </Link>
          </div>
          <div className="review-section_image" />
        </section>
        <section className="review-section">
          <div className="review-section_image" />
          <div className="review-section_content">
            <h2>Покупайте билеты в музеи и бронируйте экскурсии</h2>
            <p>Подзаголовок</p>
            <Link href={'/tour'} className={"button button_filled button_medium"}>
              Перейти
            </Link>
          </div>
        </section>
    </main>
  );
}
