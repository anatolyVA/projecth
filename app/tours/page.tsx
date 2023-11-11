import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import "./style.css";
import Card from "@/components/Card";
const SoborPNG = "/sobor.png";
import Image from "next/image";
const backgroundPNG = "/thundertower.png";

function Tours() {
  return (
    <main className="page">
      <div className="page_background"></div>
      <div className="page_header">
        <div className="header-items">
          <h1>Экскурсии</h1>
          <p style={{ opacity: "0.5", fontWeight: "700" }}>
            Проведение туров и экскурсий по историческим объектам
          </p>
        </div>
      </div>
      <hr className="divider"></hr>
    </main>
  );
}

export default Tours;