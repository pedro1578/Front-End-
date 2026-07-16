import { useEffect, useState } from "react";
import { getProdutos } from "../services/api";
import CardProduto from "../components/CardProduto";

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');
    const [categoria, setCategoria] = useState('Todas');

    useEffect(() => {
        getProdutos()
            .then(red => setProdutos(res.data))
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
        <div className="home">
            <div className = "filtros">
                <input type="text" placeholder="Buscar produto..." value={busca} onChange={e => setBusca(e.target.value)}/>
                <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                    {categorias.map(c => <option key={c}>{c}</option>)}
                </select>
            </div>

            <div className="grid-produtos">
                {produtoFiltrados.map(produtos => (
                    <CardProduto key={produtos.id} produtos={produtos} />
                ))}
            </div>
        </div>
    );
}