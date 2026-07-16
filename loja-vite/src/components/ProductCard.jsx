import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ produto }) {
  const navigate = useNavigate();
  const { adicionarItem } = useCart();

  return (
    <div style={{
      backgroundColor: '#13131A',
      border: '1px solid #1E1E2E',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#6366F1';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#1E1E2E';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ aspectRatio: '1', backgroundColor: '#27272A', overflow: 'hidden' }}
        onClick={() => navigate(`/produto/${produto.id}`)}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div onClick={() => navigate(`/produto/${produto.id}`)}>
          <p style={{ color: '#52525B', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            {produto.categoria}
          </p>
          <h3 style={{ color: 'white', fontWeight: 500, fontSize: '14px', lineHeight: 1.4 }}>
            {produto.nome}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: 'white', fontWeight: 600, fontSize: '18px' }}>
            R$ {produto.preco.toFixed(2)}
          </span>
          <button
            onClick={() => adicionarItem(produto)}
            style={{
              backgroundColor: '#6366F1',
              color: 'white',
              fontSize: '12px',
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#818CF8'}
            onMouseLeave={e => e.target.style.backgroundColor = '#6366F1'}
          >
            + Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}