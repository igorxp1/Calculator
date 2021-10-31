import React, { useState } from "react";
import Teclado from "./Teclado.js";
import Visor from "./Visor.js";

export default function Calculadora(props) {
  const [valor, setValor] = useState("0");
  const [res, setRes] = useState(0);
  const [resultadoEspaco, setResultadoEspaco] = useState("");

  function obterValor(valor) {
    setValor(valor);
  }
 
  function fazerConta() {
    setResultadoEspaco(valor.split(" "));
    setRes(0);

    for (let i = 0; i < resultadoEspaco.length; i++) {
      if (i === 1) {
        if (resultadoEspaco[i] === "+") {
          setRes(
            parseFloat(resultadoEspaco[i - 1]) +
              parseFloat(resultadoEspaco[i + 1])
          );
        } else if (resultadoEspaco[i] === "-") {
          setRes(
            parseFloat(resultadoEspaco[i - 1]) -
              parseFloat(resultadoEspaco[i + 1])
          );
        } else if (resultadoEspaco[i] === "/") {
          setRes(
            parseFloat(resultadoEspaco[i - 1]) /
              parseFloat(resultadoEspaco[i + 1])
          );
        } else if (resultadoEspaco[i] === "*") {
          setRes(
            parseFloat(resultadoEspaco[i - 1]) *
              parseFloat(resultadoEspaco[i + 1])
          );
        }
      } else {
        if (resultadoEspaco[i] === "+") {
          setRes(res + parseFloat(resultadoEspaco[i + 1]));
        } else if (resultadoEspaco[i] === "-") {
          setRes(res - parseFloat(resultadoEspaco[i + 1]));
        } else if (resultadoEspaco[i] === "/") {
          setRes(res / parseFloat(resultadoEspaco[i + 1]));
        } else if (resultadoEspaco[i] === "*") {
          setRes(res * parseFloat(resultadoEspaco[i + 1]));
        }
      }
    }
    // console.log("resultado- " + res);
  }

  return (
    <div>
      <Visor result={res} num={valor} />

      <Teclado contar={fazerConta} evento={obterValor}></Teclado>
    </div>
  );
}
