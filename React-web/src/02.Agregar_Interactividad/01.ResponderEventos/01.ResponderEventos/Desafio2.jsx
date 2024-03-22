import React from "react";
/*Desafío 2 de 2: Conecta los eventos 
Este componente ColorSwitch renderiza un botón. Se supone que debe cambiar el color de la página. Conéctalo a la prop controladora de evento onChangeColor que recibe del padre de modo que al pulsar el botón cambie el color.

Después que hagas esto, fíjate que al pulsar el botón también incrementa el contador de clics de la página. Tu colega que escribió el componente padre insiste que onChangeColor no incrementa ningún contador. ¿Qué más podría estar pasando? Soluciónalo de manera que el botón sólo cambie el color, y no incremente el contador. */

const Desafio2 = ({ onChangeColor }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Cambiar color
    </button>
  );
};

export default Desafio2;
