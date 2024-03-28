/* Desafío 1 de 2: Fijar un contador de peticiones 
Estás trabajando en una aplicación de comercialización de arte que permite al usuario enviar varios pedidos de un artículo de arte al mismo tiempo. Cada vez que el usuario pulsa el botón «Buy», el contador de «Pending» debería aumentar en uno. Después de tres segundos, el contador de «Pending» debería disminuir y el de «Completed» debería aumentar.

Sin embargo, el contador de «Pending» no se comporta como está previsto. Al pulsar «Comprar», disminuye a -1 (¡lo que no debería ser posible!). Y si pulsas rápido dos veces, ambos contadores parecen comportarse de forma imprevisible.

¿Por qué ocurre esto? Arregla ambos contadores.


*/
import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <>
      <h3>Pendiente: {pending}</h3>
      <h3>Completado: {completed}</h3>
      <button onClick={handleClick}>Comprar</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
