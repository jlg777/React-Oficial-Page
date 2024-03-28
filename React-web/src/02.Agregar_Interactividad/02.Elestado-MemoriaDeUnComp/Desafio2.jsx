import { useState } from "react";

/*Desafío 2 de 4: Arreglar entradas de formulario atascadas 
Cuando escribimos en los campos del formulario, no obtenemos nada. Es como si los valores estuvieran «atascados» con cadenas vacías. El valor de la primera <entrada> está configurado para coincidir siempre con la variable firstName, y el valor de la segunda <entrada> está configurado para coincidir siempre con la variable lastName. Esto es correcto. Ambas entradas tienen controladores de eventos onChange, que intentan actualizar las variables en función de la última entrada del usuario (e.target.value). Sin embargo, las variables no parecen «recordar» sus valores entre renderizaciones. Solucionemos esto usando variables de estado en su lugar.*/
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Nombre"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Apellido"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hola, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reiniciar</button>
    </form>
  );
}
