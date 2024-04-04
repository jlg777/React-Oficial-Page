/*Desafío 1 de 3: Corregir las actualizaciones de estado incorrectas 
Este formulario tiene algunos errores. Haz clic en el botón que aumenta la puntuación unas cuantas veces. Observa que no aumenta. A continuación, edita el nombre, y observa que la puntuación se ha «puesto al día» con sus cambios. Por último, edita el apellido y observa que la puntuación ha desaparecido por completo.

Tu tarea es arreglar todos estos errores. A medida que los vayas arreglando, explica por qué ocurre cada uno de ellos.*/

import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        Nombre:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Apellido:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
