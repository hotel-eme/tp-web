export function CampoTexto(props) {
  return (
    <p>
      <label>
        <strong>{props.nomeExibicao}:</strong>
        <input type="text" name={props.nomeApi} defaultValue={props.valorInicial} onChange={props.onChange} />
      </label>
    </p>
  );
}

export function CampoCheckbox(props) {
  return (
    <p>
      <label>
        <input type="checkbox" name={props.nomeApi} onChange={props.onChange} />
        <strong>{props.nomeExibicao}</strong>
      </label>
    </p>
  );
}
