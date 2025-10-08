import { useState } from "react";
import Button from "./button";

const Calculadora = () => {
  const [pantalla, setPantalla] = useState("0");
  const [guardado, setGuardado] = useState(null);
  const [operacion, setOperacion] = useState(null);

  function numero(n) {
    if (pantalla === "0") {
      setPantalla((n));
    } else {
      setPantalla(pantalla + String(n));
    }
  }

  function operador(op) {
    setGuardado(Number(pantalla));
    setOperacion(op);
    setPantalla("0");
  }

  function igual() {
    if (!guardado || !operacion) return;

    const n2 = Number(pantalla);
    let res;

    if (operacion === "+") res = guardado + n2;
    if (operacion === "-") res = guardado - n2;
    if (operacion === "*") res = guardado * n2;
    if (operacion === "/") res = guardado / n2;
    if (operacion ==="/"){
        if(n2===0){
            setPantalla("Error, no se puede dividir por 0");
            return
        }
        res = guardado / n2;
    }

    setPantalla(String(res));
    setGuardado(null);
    setOperacion(null);
  }

  function reset() {
    setPantalla("0");
    setGuardado(null);
    setOperacion(null);
  }

  return (
    <div >
      <label>Pantalla: {pantalla}</label>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={() => numero(1)}>1</button>
      <button onClick={() => numero(2)}>2</button>
      <button onClick={() => numero(3)}>3</button>
      <br />
      <button onClick={() => numero(4)}>4</button>
      <button onClick={() => numero(5)}>5</button>
      <button onClick={() => numero(6)}>6</button>
      <br />
      <button onClick={() => numero(7)}>7</button>
      <button onClick={() => numero(8)}>8</button>
      <button onClick={() => numero(9)}>9</button>
      <br />
      <button onClick={() => numero(0)}>0</button>
      <br />
      <button onClick={() => operador("+")}>+</button>
      <button onClick={() => operador("-")}>-</button>
      <button onClick={() => operador("/")}>/</button>
      <button onClick={() => operador("")}></button>
      <button onClick={igual}>=</button>
    </div>
  );
};

export default Calculadora;