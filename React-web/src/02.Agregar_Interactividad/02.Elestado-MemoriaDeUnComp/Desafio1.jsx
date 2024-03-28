import { useState } from "react";
import { sculptureList } from "./Data.js";

/* Desafío 1 de 4: Completa la galería 
Cuando presionamos «Siguiente» en la última escultura, el código falla. Arregla la lógica para evitar el bloqueo. Puedes hacer esto agregando lógica adicional al controlador de evento o deshabilitando el botón cuando la acción no es posible.

Después de arreglar el error, agrega un botón «Anterior» que muestre la escultura anterior. No debería chocar con la primera escultura.*/

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [viewButton, setViewButton] = useState(true);

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Ya estás en el último elemento del array.");
      setViewButton(!viewButton);
    }
  }

  function handleNextClick1() {
    if (index <= sculptureList.length - 1) {
      setIndex(index - 1);
      setViewButton(true); // Si estamos retrocediendo, volvemos a mostrar el botón "Siguiente"
    } else {
      console.log("Ya estás en el primer elemento del array.");
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      {viewButton && <button onClick={handleNextClick}>Siguiente</button>}

      <button onClick={handleNextClick1} disabled={index === 0}>
        Anterior
      </button>
      <h2>
        <i>{sculpture.name} </i>
        por {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
