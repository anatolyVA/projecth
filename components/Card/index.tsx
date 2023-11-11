import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  image: string;
  types: {
    type: string;
  };
  name: string;
};

function Card({ image, types, name }: Props) {
  return (
    <div className="card">
      <Image
        className="card-image"
        height={300}
        width={300}
        alt=""
        src={image}
      ></Image>
      <div className="body">
        <div className="header">
          <div className="types">
            <span>{types.type}</span>
          </div>
          <h2>{name}</h2>
        </div>
        <hr style={{ opacity: "0.2" }}></hr>
        <p>Описание всех описаний</p>
        <Link href="/" className="button button_filled button_medium">
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default Card;
