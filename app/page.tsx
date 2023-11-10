import './style.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-page_hero">
          <div className="home-page_hero-center">
            <h1>Интерактивная карта истории Смоленска</h1>
            <Link
              className={"button button_filled button_large"}
              href={'/'}
            >
              Исследовать
            </Link>
          </div>
        </div>
    </main>
  )
}
