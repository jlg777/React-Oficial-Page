import React from "react";

const Desafio1 = () => {
  const time = new Date();
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default Desafio1;
