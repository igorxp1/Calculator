import "/src/Components/Visor.css";

export default function Visor(props) {
  var val = props.num;

  return (
    <center>
      <div className="monitor">
        <p className="label1">{val}</p>
        <p className="label2">{props.result}</p>
      </div>
    </center>
  );
}
