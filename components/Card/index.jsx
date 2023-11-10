import React from "react";
import './style.css'
import Link from 'next/link'

function Card({ image, type, name }) {
  return (
    <div className="card" >
      <div
        style={{backgroundImage: `url(${image})`}}
        className="card-image"
      >
      </div>
      <div className="body">
        <div className='header'>
            <div className="types">
                <span>{type.type1}</span>
            </div>
            <h2>{name}</h2>
        </div>
        <hr style={{opacity: '0.2'}}></hr>
        <p>Описание всех описаний</p>
        <Link href='/' className="button button_filled button_medium">Подробнее</Link>
      </div>
    </div>
  );
}

export default Card;
