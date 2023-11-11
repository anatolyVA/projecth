import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import "./style.css";
import Card from "@/components/Card";
const SoborPNG = "/sobor.png";
import Image from "next/image";
const backgroundPNG = "/thundertower.png";
type Props = {
  params: {
    id: number;
  };
};

function Attraction({ params: { id } }: Props) {
  return (
    <main className="page">
      <div className="page_background"></div>
      <div className="page_header">
        <div className="header-items">
          <p style={{ opacity: "0.5" }}>Исторические достопримечательности</p>
          <h1>Громовая башня</h1>
          <p style={{ opacity: "0.5", fontWeight: "700" }}>
            Одна из башен Смоленского кремля
          </p>
        </div>
        <div className="header-buttons">
          <button className="iconbutton iconbutton_outlined">
            <AiOutlineUser size="1.5em"></AiOutlineUser>
          </button>
          <button className="button button_outlined button_medium">
            Показать на карте
          </button>
        </div>
      </div>
      <hr className="divider"></hr>
      <div className="page_content">
        <section className="left-section">
          <h2 className="pageh2">Описание</h2>
          <p>Успехи первых недель войны окончательно вселили в руководство Рейха
            уверенность в скором благоприятном завершении Восточной кампании.
            Решающий удар генеральный штаб Вермахта готовил нанести на
            смоленском направлении, как открывающем кратчайший путь на Москву.В
            свою очередь советское военное руководство предпринимало отчаянные
            попытки выправить ситуацию и остановить продвижение немецких войск к
            столице.
          </p>
          <p>
            Успехи первых недель войны окончательно вселили в руководство Рейха
            уверенность в скором благоприятном завершении Восточной кампании.
            Решающий удар генеральный штаб Вермахта готовил нанести на
            смоленском направлении, как открывающем кратчайший путь на Москву.В
            свою очередь советское военное руководство предпринимало отчаянные
            попытки выправить ситуацию и остановить продвижение немецких войск к
            столице.
          </p>
          <p>
            Успехи первых недель войны окончательно вселили в руководство Рейха
            уверенность в скором благоприятном завершении Восточной кампании.
            Решающий удар генеральный штаб Вермахта готовил нанести на
            смоленском направлении, как открывающем кратчайший путь на Москву.В
            свою очередь советское военное руководство предпринимало отчаянные
            попытки выправить ситуацию и остановить продвижение немецких войск к
            столице.
          </p>
        </section>
        <section className="right-section">
          <h2 className="pageh2">Фото</h2>
          <div className="grid">
            <Image className="descrpt-image" height={200} width={300} alt="" src={"/thundertower.png"}></Image>
            <Image className="descrpt-image" height={200} width={300} alt="" src={"/thundertower.png"}></Image>
            <Image className="descrpt-image" height={200} width={300} alt="" src={"/thundertower.png"}></Image>
            <Image className="descrpt-image" height={200} width={300} alt="" src={"/thundertower.png"}></Image>
          </div>
        </section>
      </div>
      <hr className="divider"></hr>
      <section className="card-section">
        <header className="card-section_header">
          <h2 className="pageh2">Вам также может понравиться</h2>
        </header>
        <main className="card-section_body">
          <Card name="Успенский собор" types={{type: 'Церкви и соборы'}} image={SoborPNG}/>
          <Card name="Успенский собор" types={{type: 'Церкви и соборы'}} image={SoborPNG}/>
          <Card name="Успенский собор" types={{type: 'Церкви и соборы'}} image={SoborPNG}/>
          <Card name="Успенский собор" types={{type: 'Церкви и соборы'}} image={SoborPNG}/>
        </main>
      </section>
    </main>
  );
}

export default Attraction;
