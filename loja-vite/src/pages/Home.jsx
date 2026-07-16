import { useEffect, useState } from "react";
import { getProdutos } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [categoria, setCategoria] = useState('Todas');

    useEffect(() => {
        getProdutos()
            .then(res => setProdutos(res.data))
            .catch(err => console.error('Erro ao buscar produto:', err))
            .finally(() => setLoading(false));
        
    }, []);

    const categorias = ['Todas',...new Set(produtos.map(p => p.categoria))];

    const produtoFiltrados = produtos.filter(p => {
        const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase());
        const matchCategoria = categoria === 'Todas' || p.categoria === categoria;
        return matchBusca && matchCategoria;
    });

    if (loading) return <p>Carregando protudos...</p>

    return (
  <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '40px 24px' }}>
    <div style={{ marginBottom: '40px' }}>
      <p style={{ color: '#6366F1', fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
        Catálogo
      </p>
      <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em' }}>
        Todos os produtos
      </h1>
    </div>

    <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
        style={{
          backgroundColor: '#13131A',
          border: '1px solid #1E1E2E',
          borderRadius: '8px',
          padding: '10px 16px',
          fontSize: '14px',
          color: 'white',
          outline: 'none',
          width: '280px'
        }}
        onFocus={e => e.target.style.borderColor = '#6366F1'}
        onBlur={e => e.target.style.borderColor = '#1E1E2E'}
      />
      <select
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
        style={{
          backgroundColor: '#13131A',
          border: '1px solid #1E1E2E',
          borderRadius: '8px',
          padding: '10px 16px',
          fontSize: '14px',
          color: '#d4d4d8',
          outline: 'none',
          cursor: 'pointer'
        }}
      >
        {categorias.map(c => <option key={c} style={{ backgroundColor: '#13131A' }}>{c}</option>)}
      </select>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px'
    }}>
      {produtoFiltrados.map(produto => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>

    {produtoFiltrados.length === 0 && (
      <div style={{ textAlign: 'center', padding: '80px 0', color: '#52525B' }}>
        <p style={{ fontSize: '18px' }}>Nenhum produto encontrado.</p>
        <p style={{ fontSize: '14px', marginTop: '4px' }}>Tente outro termo ou categoria.</p>
      </div>
    )}
  </div>
);
}