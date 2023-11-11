import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from 'react-icons/md'
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
            <MdFavoriteBorder  size="1.5em"></MdFavoriteBorder>
          </button>
          <Link href={'/map'} className="button button_outlined button_medium">
            Показать на карте
          </Link>
        </div>
      </div>
      <hr className="divider"></hr>
      <div className="page_content">
        <section className="left-section">
          <h2 className="pageh2">Описание</h2>
          <p>
            Башня Громовая – одна из пяти сохранившихся шестнадцатигранных башен
            Смоленской крепостной стены, которые часто называют круглыми.
            Первоначально таких башен было построено 16. Название башни –
            позднее, происхождение его неизвестно. В росписи 1609 года она
            обозначена просто как «круглая», в польском описании крепости 1654
            года она называется Тупинской, в ХVIII – 1-й половине ХIХ века –
            Тупинской и Топинской, с конца ХIХ века закрепляется название
            Громовая.
          </p>
          <p>
            Высказывается много версий происхождения названия башни. Так,
            Топинской её могли назвать от топей, т.е. болот, которые
            существовали за крепостной стеной. Тупинской башню могли прозвать от
            тупика, которым заканчивалась Ильинская улица. Существует также
            версия, что Тупинской башня называется от тупого угла, который здесь
            образовывала крепостная стена. Громовой, возможно, она была прозвана
            за громкий звук при выстреле из пушек, а по другой версии, от молний
            и грома. Однако не будем забывать, что рядом с башней находился
            Ильинский храм, который был снесен только в 1930-е годы. Илья Пророк
            в народе почитался как громовержец, повелитель грома и пользовался
            большим уважением, считался одним из покровителей военных. Возможно,
            это тоже повлияло на появление названия Громовой башни.
          </p>
          <p>
            Внешний облик башни Громовой характерен для многогранных башен
            Смоленской крепости – выдающегося военно-оборонительного сооружения
            Русского государства. Башня имеет 4 яруса, ниже зубцов башню
            охватывает пояс из вертикальных навесных бойниц – машикулей или
            варниц, как они назывались в России. Такие бойницы служили не только
            для обстрела противника у подножия башни, но и для того, чтобы
            выливать ему на голову горячий «вар» – кипяток – воду или горячую
            смолу. Могли использовать и нечистоты, тогда это превращалось
            дополнительно в оружие психологического воздействия на противника.
          </p>
        </section>
        <section className="right-section">
          <h2 className="pageh2">Фото</h2>
          <div className="grid">
            <Image
              className="descrpt-image"
              height={200}
              width={300}
              alt=""
              src={"/thundertower.png"}
            ></Image>
            <Image
              className="descrpt-image"
              height={200}
              width={300}
              alt=""
              src={"/thundertower.png"}
            ></Image>
            <Image
              className="descrpt-image"
              height={200}
              width={300}
              alt=""
              src={"/thundertower.png"}
            ></Image>
            <Image
              className="descrpt-image"
              height={200}
              width={300}
              alt=""
              src={"/thundertower.png"}
            ></Image>
          </div>
        </section>
      </div>
      <hr className="divider"></hr>
      <section className="card-section">
        <header className="card-section_header">
          <h2 className="pageh2">Вам также может понравиться</h2>
        </header>
        <main className="card-section_body">
          <Card
            name="Успенский собор"
            types={{ type: "Церкви и соборы" }}
            image={SoborPNG}
          />
          <Card
            name="Успенский собор"
            types={{ type: "Церкви и соборы" }}
            image={SoborPNG}
          />
          <Card
            name="Успенский собор"
            types={{ type: "Церкви и соборы" }}
            image={SoborPNG}
          />
          <Card
            name="Успенский собор"
            types={{ type: "Церкви и соборы" }}
            image={SoborPNG}
          />
        </main>
      </section>
    </main>
  );
}

export default Attraction;
