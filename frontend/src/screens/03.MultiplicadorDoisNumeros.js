import Container from '../common/Container';
import { useState } from 'react';

export default function MultiplicadorDoisNumerosScreen() {
  var [number1, setNumber1] = useState(null);
  var [number2, setNumber2] = useState(null);
  var [resultado, setResultado] = useState(null);

  function calcula() {
    setResultado(number1 * number2);
  }

  return (
    <Container>
      <input type="text" placeholder="Digite um número:" onChange={function(e){setNumber1(e.target.value)}} />
      <input type="text" onChange={function(e){setNumber2(e.target.value)}} placeholder="Digite outro número:" />
      <br></br>
      <br></br>
      <button onClick={calcula}>Calcular</button>
      <p>Resultado: {resultado}</p>

    </Container>
  );
}
