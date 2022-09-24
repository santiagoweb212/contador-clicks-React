export default function Button({ texto, suma, contador, n }) {
  const handlerClick = () => {
    if (n == "1") {// n es el identificador del componente button tine como valor 1 o 2 
      suma(contador + 1);/* si el valor de n es 1 contador aumenta 1 a su valor recordemos que contador almacena counter tal como definimos en las props */
    } else if (n == "2") {/* si el valor de n es igual a 2 contador se setea a 0 */
      suma((contador = 0));
    }
  };
  return (
    <>
      <button className="button" type="button" onClick={handlerClick}> {/*button recibe un eventlistener  tipo onClick que recibe una funcion llamdo handlerClick que se encarga de aumentar el contador en 1 o reiniciarlo a 0 */}
        {texto}
      </button>
    </>
  );
}
