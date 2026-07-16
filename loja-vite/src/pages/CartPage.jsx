import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { itens, removerItem, alterarQuantidade, total, limparCarrinho } = useCart();
  const navigate = useNavigate();

  if (itens.length === 0) {
    return (
      <div className="carrinho-vazio">
        <p>Seu carrinho está vazio.</p>
        <button onClick={() => navigate('/')}>Ver Produtos</button>
      </div>
    );
  }

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {itens.map(item => (
        <div key={item.id} className="carrinho-item">
          <img src={item.imagem} alt={item.nome} />
          <div>
            <h4>{item.nome}</h4>
            <p>R$ {item.preco.toFixed(2)} cada</p>
          </div>
          <div className="quantidade">
            <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}>-</button>
            <span>{item.quantidade}</span>
            <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}>+</button>
          </div>
          <p>R$ {(item.preco * item.quantidade).toFixed(2)}</p>
          <button onClick={() => removerItem(item.id)}>Remover</button>
        </div>
      ))}

      <div className="resumo">
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button onClick={limparCarrinho}>Limpar Carrinho</button>
        <button onClick={() => alert('Compra finalizada!')}>Finalizar Compra</button>
      </div>
    </div>
  );
}