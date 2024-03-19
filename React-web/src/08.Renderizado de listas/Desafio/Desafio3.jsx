import React from "react";

/*
Este componente RecipeList contiene dos llamadas map anidadas. Para simplificarlo, extrae un componente Recipe de el que aceptará las props id, name, y ingredients. ¿Dónde colocarías la key exterior y por qué?
*/

import { recipes } from "./data.js";

const Desafio3 = () => {
  function Recipe({ id, name, ingredients }) {
    return (
      <>
        <h2>{name}</h2>
        <ul>
          {ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map((recipe) => (
        <Recipe
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

export default Desafio3;
