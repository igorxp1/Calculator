import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Components/Teclado.css";

export default function Teclado(props) {
  const [valor, setValor] = useState("");
  const [blockBtn, setBlockBtn] = useState(false);

  //setVal(props.valor)

  /*for(let i=0; i<15;i++){
   setNum( [...num,
    {
      id: num.length+1,
      content: i
    }]);
  
  }
  console.log(num.content);*/

  const recebeValor = (input) => {
    if (
      input === "+" ||
      input === "-" ||
      input === "*" ||
      input === "/" ||
      input === ""
    ) {
      input = " " + input + " ";
      setBlockBtn(false);
    } else setBlockBtn(true);

    setValor(valor + input);
    props.evento(valor + input);
  };
  const limparValor = () => {
    console.log("entrou");
    setValor("");
    props.evento("");
  };

  /*const fazerConta = () => {
    props.result(true);
  };*/

  return (
    <div>
      <center>
        <table>
          <tr>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(1)}>
                1
              </Button>
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(2)}>
                2
              </Button>{" "}
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(3)}>
                3
              </Button>
            </td>
            <td>
              {!blockBtn ? (
                <Button color="grey" disabled onClick={() => recebeValor("-")}>
                  -
                </Button>
              ) : (
                <Button inverted color="grey" onClick={() => recebeValor("-")}>
                  -
                </Button>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(4)}>
                4
              </Button>
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(5)}>
                5
              </Button>
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(6)}>
                6
              </Button>
            </td>
            <td>
              {!blockBtn ? (
                <Button color="grey" disabled onClick={() => recebeValor("+")}>
                  +
                </Button>
              ) : (
                <Button inverted color="grey" onClick={() => recebeValor("+")}>
                  +
                </Button>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(7)}>
                7
              </Button>
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(8)}>
                8
              </Button>
            </td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(9)}>
                9
              </Button>
            </td>
            <td>
              {!blockBtn ? (
                <Button color="grey" disabled onClick={() => recebeValor("*")}>
                  *
                </Button>
              ) : (
                <Button inverted color="grey" onClick={() => recebeValor("*")}>
                  {" "}
                  *{" "}
                </Button>
              )}
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button inverted color="red" onClick={() => recebeValor(0)}>
                0
              </Button>
            </td>
            <td></td>
            <td>
              {!blockBtn ? (
                <Button color="grey" disabled onClick={() => recebeValor("/")}>
                  {" "}
                  /{" "}
                </Button>
              ) : (
                <Button inverted color="grey" onClick={() => recebeValor("/")}>
                  /
                </Button>
              )}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <Button
                className="Button"
                animated
                onClick={() => props.contar(true)}
              >
                <Button.Content visible>Fazer Conta</Button.Content>
                <Button.Content hidden>
                  =
                </Button.Content>
              </Button>
            </td>
            <td colSpan="2">
              <Button className="Button" animated onClick={limparValor}>
                <Button.Content visible>Reset</Button.Content>
                <Button.Content hidden>
                  <Icon name="close" />
                </Button.Content>
              </Button>
            </td>{" "}
          </tr>
        </table>
      </center>
    </div>
  );
}
