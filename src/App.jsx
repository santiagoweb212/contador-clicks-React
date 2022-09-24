import Button from "./componentes/Button";
import { useState } from "react";
import { Display } from "./componentes/Display";
export function App() {
  const [counter, setCounter] = useState(0);//esto es un hook
  return (
    <>
      <Display pantalla={counter} />{/*coponente display se encarga de mostrar en pantalla el valor del contador que se encuentra almacenado en counter */}
      <Button texto="dame click" suma={setCounter} contador={counter} n="1" /> {/* componente Button se encarga de incrementar el valor del contador, para aumentar el valor del contador este se ayuda del hook use state que inicializa en 0 este componente tomo como props los parametros del hoook estos parametros son counter que es una variable que almacena el valor del estado , set counter, n es un identificador de componente tiene el avor de 1 puedes poner cualquier valor,texto descripcion del button */}
      <Button  texto="reiniciar" n="2" suma={setCounter} />{/*coponente Button2 se encarga  de reiniciar el contador tiene 3 props texto:descripcion del button, n es indetificador ,setcounter es una funcion */}
    </>
  );
}
