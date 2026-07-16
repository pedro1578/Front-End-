import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProdutoPorId } from '../services/api';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarItem } = useCart();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    getProdutoPorId(id)
      .then(res => setProduto(res.data))
      .catch(() => navigate('/'));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="detalhe">
      <button onClick={() => navigate(-1)}>← Voltar</button>
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p>Categoria: {produto.categoria}</p>
      <p>Estoque: {produto.estoque} unidades</p>
      <strong>R$ {produto.preco.toFixed(2)}</strong>
      <button onClick={() => adicionarItem(produto)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}