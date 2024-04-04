import React from "react";
import { people } from "../data";
import { getImageUrl } from "../untils";

const Desafio1 = () => {
  const chemists = people.filter((person) => person.profession === "químico");

  const listItems = chemists.map((people) => (
    <li key={people.id}>
      <img src={getImageUrl(people)} />
      <p>
        <b>{people.name}:</b>
        {" " + people.profession + " "}
        conocido/a por {people.accomplishment}
      </p>
    </li>
  ));

  const cientificos = people.map((Cientist) => (
    <li key={Cientist.id}>
      <img src={getImageUrl(Cientist)} />
      <p>
        <b>{Cientist.name}:</b>
        {" " + Cientist.profession + " "}
        conocido/a por {Cientist.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <hr />
      <ul>{cientificos}</ul>
    </>
  );
};

export default Desafio1;
