import { Link } from 'react-router-dom';
import '../css/container.css';

export default function Container(props) {
  /**
   * Um container para incorporar telas
   */
  return (
    <main id="container">
      <header id="back">
        <Link to="/">Voltar para a Home</Link>
      </header>
      <section id="conteudo_tela">
        {props.children}
      </section>
    </main>
  );
}
