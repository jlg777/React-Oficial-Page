/* Desafío 3 de 4: Arregla un error 
Aquí hay un pequeño formulario que se supone que permite al usuario dejar algunos comentarios. Cuando se envía el comentario, se supone que debe mostrar un mensaje de agradecimiento. Sin embargo, falla con un mensaje de error que dice «Se generaron menos Hooks de los esperados». ¿Puedes detectar el error y corregirlo?*/

import { useState } from "react";

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  if (isSent) {
    return <h1>¡Gracias!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Enviando: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
