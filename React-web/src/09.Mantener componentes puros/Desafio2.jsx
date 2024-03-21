import React from "react";
import { getImageUrl } from "../08.Renderizado de listas/untils.jsx";
import { people } from "../08.Renderizado de listas/data.jsx";

console.log(people);

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

const Desafio2 = () => {
  // Mapear el array de people y convertirlo en un array de objetos person
  const peopleAsPerson = people.map((person, index) => (
    <div key={index}>
      <Header person={person} />
      <Avatar person={person} />
    </div>
  ));

  return <>{peopleAsPerson}</>;
};

export default Desafio2;
