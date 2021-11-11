import Container from '../common/Container';
import { useState } from 'react';

export default function ContadorPessoasScreen() {
  var [contador, setContador] = useState(0);

  function adicionarPessoa() {
    setContador(contador + 1);
  }

  function removePessoa() {
    setContador(Math.max(0, contador - 1))
  }

  return (
    <Container title="Contador de Pessoas">
      <p>{contador}</p>
      <button onClick={removePessoa} disabled={contador == 0}>Remover</button>
      <button onClick={adicionarPessoa}>Adicionar</button>
    </Container>
  );
}
