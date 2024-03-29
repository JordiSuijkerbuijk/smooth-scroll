import { h } from "preact";

import cardsArray from "../../assets/data/cards.json";

import style from "./stacked.module.scss";

const colorArray = [
  { from: "#f85362", to: "#ff8ea2" },
  { from: "#264e8c", to: "#5591e7" },
  { from: "#748ca4", to: "#9fb2cb" },
];

const card = (bankName, balance, cardNumber, key) => (
  <div
    key={key}
    id="card"
    className={style.card}
    style={{
      backgroundImage: `linear-gradient(to right top, ${
        colorArray[key % colorArray.length].from
      }, ${colorArray[key % colorArray.length].to})`,
    }}
  >
    <div className={style.bankName}>{bankName}</div>
    <div className={style.columnWrapper}>
      <div className={style.balanceWrapper}>
        <div className={style.balance}>${balance}</div>
        <div className={style.text}>BALANCE</div>
      </div>
      <div className={style.cardNumber}>{cardNumber}</div>
    </div>
  </div>
);

function Stacked() {
  let ticking = false;

  document.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const boxes = document.querySelectorAll("#flex");

        for (let i = 0; i < boxes.length; i += 1) {
          const top = boxes[i].offsetTop - window.pageYOffset < 0;
          boxes[i].firstChild.style.cssText += `
					position: ${top ? "fixed" : "absolute"};
					top: ${i * 25}px;
					`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  return (
    <div id="app" className={style.app}>
      {cardsArray.map((item, key) => (
        <div key={key} id="flex" className={style.flex}>
          {card(item.title, item.balance, item.cardNumber, key)}
        </div>
      ))}
    </div>
  );
}

export default Stacked;
