/*Desafío 1 de 3: Mostrar un icono para los elementos incompletos con ? : 
Utiliza el operador condicional (cond ? a : b) para renderizar un ❌ si isPacked no es true.*/

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={true} name="Casco con dorado a la hoja" />
        <Item isPacked={false} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
