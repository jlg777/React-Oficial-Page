import React from "react";

const Events = () => {
  const image = () => {
    alert("Cargando imagen");
  };

  return (
    <>
      <button onClick={image}>cargar imagen</button>
    </>
  );
};

export default Events;
