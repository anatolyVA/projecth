import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import "./style.css";
const backgroundPNG = "/thundertower.png"
type Props = {
  params: {
    id: number;
  };
};

function Attraction({ params: { id } }: Props) {
  return (
    <main className="attraction-page">
      <div
        style={{
          background:
            `background: linear-gradient(rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 1) 100%), no-repeat center/100% url(${backgroundPNG})`,
        }}
        className="attraction-page_background"
      >
        <div className="attraction-page_background-center">
          <div className="attraction-header">
            <div className="header-items">
              <span style={{ opacity: "0.5" }}>
                Исторические достопримечательности
              </span>
              <h1>Громовая башня</h1>
              <p style={{ opacity: "0.5", fontWeight: "700" }}>
                Одна из башен Смоленскогоо кремля
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
          <hr style={{ width: "100%", opacity: 0.2 }}></hr>
        </div>
      </div>
    </main>
  );
}

export default Attraction;
