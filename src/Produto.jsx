import { useState } from "react"

export default function Produto({ nome, precoAntigo, precoNovo }) {
    const [favorito, setFavorito] = useState('Favoritar')

    function favoritar() {
        setFavorito(
            favorito == 'Favoritar'?'Favoritado':'Favoritar'
        )
    }

    return (
        <>
            <div
                style={{
                    border: '1px solid black',
                    width: '200px',
                    height: '100px',
                    margin: '10px'
                }}
            >
                <div>
                    <button onClick={favoritar}>
                        {favorito}
                    </button>
                </div>

                <div>{nome}</div>

                <div>
                    R$ {precoAntigo}
                </div>

                <div>
                    R$ {precoNovo}
                </div>
            </div>
        </>
    )
}