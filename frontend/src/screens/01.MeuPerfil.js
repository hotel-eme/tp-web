import Container from '../common/Container';

export default function MeuPerfilScreen() {
  return (
    <Container title="Meu Perfil">
      <img
        width="100" height="100"
        alt="Foto de um gatinho."
        src="https://placekitten.com/500/500"
      />
      <dl>
        <dt>Dados pessoas:</dt> <dd>John Doe</dd>
        <dt>Formação:</dt> <dd>ADS</dd>
        <dt>Experiência:</dt> <dd>Programador</dd>
        <dt>Projetos:</dt> <dd>Apollo 11</dd>
      </dl>
    </Container>
  );
}
