"use client";

import "./style.css";
import Image from "next/image";
import { AiOutlineSliders } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

function SideBar() {
  type Prop = {
    index: number;
  };

  const [toggleState, setToggleState] = useState(1);

  function toggleTab({ index }: Prop) {
    setToggleState(index);
  }
  return (
    <div className="sidebar">
      <div className="user-control">
        <input placeholder="Найти" className="map_search"></input>
        <button className="iconbutton iconbutton_filled-light">
          <AiOutlineSliders size={"1.5em"} />
        </button>
      </div>
      <div className="sidebar_body">
        <Image
          className="sidebar_image"
          height={200}
          width={300}
          alt=""
          src={"/thundertower.png"}
        ></Image>
        <section className="sidebar_content">
          <div className="header">
            <p id="type">Исторические достопримечательности</p>
            <h2 id="name">Громовая башня</h2>
            <p id="subheader">Одна из башен Смоленского кремля</p>
          </div>
          <div className="tab-buttons">
            <button
              className={
                toggleState === 1
                  ? "tab-button tab-button_active"
                  : "tab-button"
              }
              onClick={() => setToggleState(1)}
            >
              Обзор
            </button>
            <button
              className={
                toggleState === 2
                  ? "tab-button tab-button_active"
                  : "tab-button"
              }
              onClick={() => setToggleState(2)}
            >
              Фото
            </button>
          </div>
          <div className="tabs">
            {toggleState === 1 ? (
              <div className="tab-content">
                <p className="overview">
                  Смоленское сражение — комплекс оборонительных и наступательных
                  операций, проведенных советскими войсками с целью не допустить
                  прорыва врага на московском направлении.
                </p>
                <Link className="navlink-primary" href={"/attraction/1"}>Читать далее</Link>
              </div>
            ) : (
              <h2>Фото</h2>
            )}
          </div>
        </section>
        <div className="buttons">
            <Link
              style={{width: '60%'}}
              href={"/attraction/1"}
              className="button button_tonal button_medium"
            >
              Подробнее
            </Link>
            <button className="iconbutton iconbutton_tonal"></button>
            <button className="iconbutton iconbutton_tonal"></button>
          </div>
      </div>
    </div>
  );
}

export default SideBar;
