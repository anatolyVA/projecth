import React from "react";
import Link from "next/link";
import "./style.css";
type Props = {
  params: {
    id: number;
  };
};

function Attraction({ params: { id } }: Props) {
  return (
    <main className="attraction-page">
      <div className="attraction-page_hero">
        <div className="attraction-page_hero-center">
          <span>Исторические достопримечательности</span>
          <h1>Громовая башня</h1>
          <p>Одна из башен Смоленскогоо кремля</p>
        </div>
      </div>
    </main>
  );
}

export default Attraction;
