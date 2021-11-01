import React, { useState } from "react";
import Teclado from "./Teclado.js";
import Visor from "./Visor.js";

export default function Calculadora(props) {
  const [valor, setValor] = useState("0");
  var result = 0;
  const [res, setRes] = useState(0);
  const [resultadoEspaco, setResultadoEspaco] = useState("");

  function obterValor(valor) {
    setValor(valor);
  }

  function fazerConta() {
    result = 0;
    setResultadoEspaco(valor.split(" "));
    console.log("1. " + result);
    for (let i = 0; i < resultadoEspaco.length; i++) {
      if (i === 1) {
        if (resultadoEspaco[i] === "+") {
          result =
            parseFloat(resultadoEspaco[i - 1]) +
            parseFloat(resultadoEspaco[i + 1]);
        } else if (resultadoEspaco[i] === "-") {
          result =
            parseFloat(resultadoEspaco[i - 1]) -
            parseFloat(resultadoEspaco[i + 1]);
        } else if (resultadoEspaco[i] === "/") {
          result =
            parseFloat(resultadoEspaco[i - 1]) /
            parseFloat(resultadoEspaco[i + 1]);
        } else if (resultadoEspaco[i] === "*") {
          result =
            parseFloat(resultadoEspaco[i - 1]) *
            parseFloat(resultadoEspaco[i + 1]);
        }
      } else {
        if (resultadoEspaco[i] === "+") {
          result = result + parseFloat(resultadoEspaco[i + 1]);
        } else if (resultadoEspaco[i] === "-") {
          console.log("-" + result);
          result = result - parseFloat(resultadoEspaco[i + 1]);
          console.log(result);
        } else if (resultadoEspaco[i] === "/") {
          result = result / parseFloat(resultadoEspaco[i + 1]);
        } else if (resultadoEspaco[i] === "*") {
          result = result * parseFloat(resultadoEspaco[i + 1]);
        }
      }
    }
    //console.log(result);
    setRes(result);
  }

  return (
    <div>
      <Visor result={res} num={valor} />

      <Teclado contar={fazerConta} evento={obterValor}></Teclado>
    </div>
  );
}
