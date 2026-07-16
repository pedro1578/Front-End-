import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { itens, removerItem, alterarQuantidade, total, limparCarrinho } = useCart();
  const navigate = useNavigate();

  if (itens.length === 0) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</p>
        <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>
          Seu carrinho está vazio
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '32px' }}>
          Adicione produtos para continuar
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#6366F1',
            color: 'white',
            fontSize: '14px',
            fontWeight: 500,
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Ver Produtos
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '32px' }}>
        Carrinho
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'start' }}>
        
        {/* Lista de itens */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {itens.map(item => (
            <div key={item.id} style={{
              backgroundColor: '#13131A',
              border: '1px solid #1E1E2E',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              <img
                src={item.imagem}
                alt={item.nome}
                style={{ width: '72px', height: '72px', objectFit: 'cover', borderRadius: '8px', backgroundColor: '#27272A' }}
              />

              <div style={{ flex: 1 }}>
                <p style={{ color: '#52525B', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                  {item.categoria}
                </p>
                <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 500 }}>{item.nome}</h4>
                <p style={{ color: '#a1a1aa', fontSize: '13px', marginTop: '2px' }}>
                  R$ {item.preco.toFixed(2)} cada
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}
                  style={{
                    width: '28px', height: '28px',
                    backgroundColor: '#27272A',
                    border: '1px solid #1E1E2E',
                    color: 'white', borderRadius: '6px',
                    cursor: 'pointer', fontSize: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >-</button>
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 500, minWidth: '20px', textAlign: 'center' }}>
                  {item.quantidade}
                </span>
                <button
                  onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
                  style={{
                    width: '28px', height: '28px',
                    backgroundColor: '#27272A',
                    border: '1px solid #1E1E2E',
                    color: 'white', borderRadius: '6px',
                    cursor: 'pointer', fontSize: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >+</button>
              </div>

              <span style={{ color: 'white', fontWeight: 600, fontSize: '15px', minWidth: '80px', textAlign: 'right' }}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </span>

              <button
                onClick={() => removerItem(item.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#52525B',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '4px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = '#ef4444'}
                onMouseLeave={e => e.target.style.color = '#52525B'}
              >×</button>
            </div>
          ))}
        </div>

        {/* Resumo */}
        <div style={{
          backgroundColor: '#13131A',
          border: '1px solid #1E1E2E',
          borderRadius: '12px',
          padding: '24px',
          position: 'sticky',
          top: '80px'
        }}>
          <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
            Resumo do pedido
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {itens.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#a1a1aa', fontSize: '13px' }}>
                  {item.nome} x{item.quantidade}
                </span>
                <span style={{ color: 'white', fontSize: '13px' }}>
                  R$ {(item.preco * item.quantidade).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #1E1E2E', paddingTop: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>Total</span>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '22px' }}>
                R$ {total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={() => alert('Compra finalizada!')}
            style={{
              width: '100%',
              backgroundColor: '#6366F1',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '8px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#818CF8'}
            onMouseLeave={e => e.target.style.backgroundColor = '#6366F1'}
          >
            Finalizar Compra
          </button>

          <button
            onClick={limparCarrinho}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#a1a1aa',
              fontSize: '13px',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #1E1E2E',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = '#ef4444';
              e.target.style.color = '#ef4444';
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = '#1E1E2E';
              e.target.style.color = '#a1a1aa';
            }}
          >
            Limpar carrinho
          </button>
        </div>
      </div>
    </div>
  );
}