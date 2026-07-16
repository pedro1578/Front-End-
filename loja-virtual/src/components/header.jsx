import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItens } = useCart();

  return (
    <header className="header">
      <Link to="/"><h1>MinhaLoja</h1></Link>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/carrinho">
          🛒 Carrinho {totalItens > 0 && <span className="badge">{totalItens}</span>}
        </Link>
      </nav>
    </header>
  );
}