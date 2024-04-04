import React from "react";
import { people } from "./data";
import { getImageUrl } from "./untils";

/*const people = [
  "Creola Katherine Johnson: matemática",
  "Mario José Molina-Pasquel Henríquez: químico",
  "Mohammad Abdus Salam: físico",
  "Percy Lavon Julian: químico",
  "Subrahmanyan Chandrasekhar: astrofísico",
];*/

function Listas() {
  //const listItems = people.map((person) => <li>{person}</li>);

  const chemists = people.filter((person) => person.profession === "químico");
  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default Listas;
