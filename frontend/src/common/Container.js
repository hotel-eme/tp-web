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
        <p id="back">
          <Link to="/">Voltar para a Home</Link>
        </p>
        <h1>{props.title}</h1>
      </header>}
      <section id="conteudo_tela">
        {props.children}
      </section>
    </main>
  );
}
