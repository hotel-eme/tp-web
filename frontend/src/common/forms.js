export function CampoTexto(props) {
  return (
    <p>
      <label>
        <strong>{props.nomeExibicao}:</strong>
        <input type="text" name={props.nomeApi} />
      </label>
    </p>
  );
}
