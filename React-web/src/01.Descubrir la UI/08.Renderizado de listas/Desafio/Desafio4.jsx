/*
Desafío 4 de 4: Lista con un separador 
Este ejemplo renderiza un famoso haiku de Tachibana Hokushi, con cada línea envuelta en una etiqueta <p>. Tu trabajo consiste en insertar un separador <hr /> entre cada párrafo. La estructura resultante debería verse así:
<article>
  <p>Escribo, borro y reescribo</p>
  <hr />
  <p>Borro de nuevo, y luego</p>
  <hr />
  <p>Florece una amapola.</p>
</article>
*/
import React from "react";

const poem = {
  lines: [
    "Escribo, borro y reescribo",
    "Borro de nuevo, y luego",
    "Florece una amapola.",
  ],
};

const Desafio4 = () => {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
};

export default Desafio4;
