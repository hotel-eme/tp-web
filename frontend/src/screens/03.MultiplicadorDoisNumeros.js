import { useState } from 'react';
import Container from '../common/Container';

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
      <input type="text" placeholder="Digite outro número:" onChange={function(e){setNumber2(e.target.value)}} />
      <button onClick={calcula}>Calcular</button>
      <p>Resultado: {resultado}</p>
    </Container>
  );
}
