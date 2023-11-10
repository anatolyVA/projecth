import React from "react";
import './style.css'
import Link from 'next/link'
import { StaticImageData } from "next/image";
type Props = {
  image: string;
  type: {
    type1: string
  }
  name: string
};

function Card({ image, type, name }: Props) {
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `rgba(0,0,0, 0.5), url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: 'gray'
        }}
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
