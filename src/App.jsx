import { useEffect, useState } from 'react'
import Produto from './Produto.jsx'
import './App.css'

export default function App() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch('https://6ac7770075a4ce3fe721ca58.mockapi.io/Produto')
      .then(resposta => resposta.json())
      .then(dados => {
        setProdutos(dados)
      })
  }, [])

  return (
    <>
      <h1>Produtos</h1>

      {produtos.map((item) => (
        <Produto
          key={item.id}
          nome={item.nome}
          precoAntigo={item.precoAntigo}
          precoNovo={item.precoNovo}
        />
      ))}
    </>
  )
}