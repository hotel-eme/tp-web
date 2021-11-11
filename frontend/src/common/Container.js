import { Link } from 'react-router-dom';
import '../css/container.css';

export default function Container(props) {
  /**
   * Um container para incorporar telas
   */
  return (
    <main id="container">
      {(window.location.pathname != '/') &&
      <header>
        <Link to="/">Voltar para a Home</Link>
        <h1>{props.title}</h1>
      </header>}
      <section id="conteudo_tela">
        {props.children}
      </section>
    </main>
  );
}
