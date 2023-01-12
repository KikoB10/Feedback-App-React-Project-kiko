import React from "react";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

export default Card;

//using this as a style component so if we wrap anything in <Card></Card> it will have all of the same styling.
