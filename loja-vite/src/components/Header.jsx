import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItens } = useCart();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(10,10,15,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1E1E2E'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{
            width: '28px', height: '28px',
            backgroundColor: '#6366F1',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '12px', fontWeight: 700 }}>L</span>
          </div>
          <span style={{ color: 'white', fontWeight: 600, letterSpacing: '-0.02em' }}>Loja</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link to="/" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = '#a1a1aa'}>
            Produtos
          </Link>
          <Link to="/carrinho" style={{
            color: '#a1a1aa', textDecoration: 'none', fontSize: '14px',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = '#a1a1aa'}>
            🛒 Carrinho
            {totalItens > 0 && (
              <span style={{
                backgroundColor: '#6366F1', color: 'white',
                fontSize: '11px', fontWeight: 700,
                width: '20px', height: '20px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {totalItens}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}