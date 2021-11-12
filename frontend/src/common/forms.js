export function CampoTexto(props) {
  return (
    <p>
      <label>
        <strong>{props.nomeExibicao}:</strong>
        <input
          type="text"
          name={props.nomeApi}
          defaultValue={props.valorInicial}
          onChange={function (event) {
            props.funcaoSet(event.target.value);
          }}
        />
      </label>
    </p>
  );
}

export function CampoCheckbox(props) {
  return (
    <p>
      <label>
        <input
          type="checkbox"
          name={props.nomeApi}
          defaultChecked={props.valorInicial}
          onChange={function (event) {
            props.funcaoSet(event.target.checked);
          }}
        />
        <strong>{props.nomeExibicao}</strong>
      </label>
    </p>
  );
}
