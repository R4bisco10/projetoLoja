import Produto from './Produto.jsx'
import './App.css'

export default function App() {
    const produtos = [
      {nome: 'Bola 1', precoAntigo: 12, precoNovo: 20, imagem: ''},
      {nome: 'Bola 2', precoAntigo: 12, precoNovo: 20, imagem: ''},
      {nome: 'Bola 3', precoAntigo: 12, precoNovo: 20, imagem: ''},
      {nome: 'Bola 4', precoAntigo: 12, precoNovo: 20, imagem: ''},
      {nome: 'Bola 5', precoAntigo: 12, precoNovo: 20, imagem: ''}
    ]

    return (
        <>
            <h1>Produtos</h1>
            {produtos.map((item, index) => (
                <Produto key={index} nome={item.nome} imagem={item.imagem}/>
            ))}
        </>
    )
}