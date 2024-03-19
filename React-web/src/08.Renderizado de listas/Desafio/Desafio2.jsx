import React from "react";
import { recipes } from "./data.js";

const Desafio2 = () => {
  const recetas = recipes.map((receta) => (
    <div key={receta.id}>
      <h2>{receta.name}</h2>
      <ul>
        {receta.ingredients.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
    </div>
  ));

  return <div>{recetas}</div>;
};

export default Desafio2;
