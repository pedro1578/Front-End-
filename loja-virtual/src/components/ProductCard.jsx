import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ produto }) {
  const navigate = useNavigate();
  const { adicionarItem } = useCart();

  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.categoria}</p>
      <strong>R$ {produto.preco.toFixed(2)}</strong>
      <div className="card-acoes">
        <button onClick={() => navigate(`/produto/${produto.id}`)}>
          Ver detalhes
        </button>
        <button onClick={() => adicionarItem(produto)}>
          + Carrinho
        </button>
      </div>
    </div>
  );
}