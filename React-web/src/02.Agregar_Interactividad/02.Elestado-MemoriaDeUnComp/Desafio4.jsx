/*Desafío 4 de 4: Eliminar estado innecesario 
Cuando se hace clic en el botón, este ejemplo debe solicitar el nombre del usuario y luego mostrar una alerta saludándolo. Intentaste usar el estado para mantener el nombre, pero por alguna razón siempre muestra «¡Hola!«.

Para corregir este código, elimina la variable de estado innecesaria. (Discutiremos sobre por qué esto no funcionó más adelante).

¿Puede explicar por qué esta variable de estado era innecesaria?*/
import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");

  function handleClick() {
    //setName(prompt("¿Cuál es tu nombre?"));
    const name = prompt("¿Cuál es tu nombre?");
    alert(`Hola, ${name}!`);
  }

  return <button onClick={handleClick}>Saludar</button>;
}
