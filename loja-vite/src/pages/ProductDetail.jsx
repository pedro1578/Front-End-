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
      .catch(() => console.error('Erro:', err));
  }, [id]);

  if (!produto) return <p style={{ color: 'white', padding: '40px' }}>Carregando...</p>;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: 'transparent',
          border: '1px solid #1E1E2E',
          color: '#a1a1aa',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '32px',
          transition: 'all 0.2s'
        }}
        onMouseEnter={e => {
          e.target.style.borderColor = '#6366F1';
          e.target.style.color = 'white';
        }}
        onMouseLeave={e => {
          e.target.style.borderColor = '#1E1E2E';
          e.target.style.color = '#a1a1aa';
        }}
      >
        ← Voltar
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        <div style={{ backgroundColor: '#13131A', borderRadius: '12px', overflow: 'hidden', aspectRatio: '1' }}>
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <p style={{ color: '#6366F1', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              {produto.categoria}
            </p>
            <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
              {produto.nome}
            </h1>
          </div>

          <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7 }}>
            {produto.descricao}
          </p>

          <div style={{ borderTop: '1px solid #1E1E2E', paddingTop: '20px' }}>
            <p style={{ color: '#52525B', fontSize: '13px', marginBottom: '4px' }}>Estoque disponível</p>
            <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{produto.estoque} unidades</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #1E1E2E', paddingTop: '20px' }}>
            <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>
              R$ {produto.preco.toFixed(2)}
            </span>
            <button
              onClick={() => adicionarItem(produto)}
              style={{
                backgroundColor: '#6366F1',
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#818CF8'}
              onMouseLeave={e => e.target.style.backgroundColor = '#6366F1'}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}