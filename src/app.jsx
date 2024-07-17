import { useState } from 'react'

const App = () => {
  const [resultados, setResultados] = useState([])
  const [historico, setHistorico] = useState(new Set())
  const [mensagem, setMensagem] = useState('')

  const rolar = () => {
    if (historico.size >= 46) {
      setMensagem('Acabaram os bonecos')
      return
    }

    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 17)
      if (!historico.has(num)) {
        novoResultado.add(num)
      }
    }

    while (novoResultado.size < 3) {
      let num = gerarNumeroAleatorio(18, 32)
      if (!historico.has(num)) {
        novoResultado.add(num)
      }
    }

    while (novoResultado.size < 5) {
      let num = gerarNumeroAleatorio(33, 48)
      if (!historico.has(num)) {
        novoResultado.add(num)
      }
    }

    // Adiciona o novo resultado formatado ao histórico e ao array de resultados
    const arrayResultado = Array.from(novoResultado).map(formatarNumero)
    setResultados((prevResultados) => [...prevResultados, arrayResultado])
    setHistorico(
      (prevHistorico) => new Set([...prevHistorico, ...novoResultado]),
    )
  }

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const formatarNumero = (numero) => {
    return numero.toString().padStart(3, '0')
  }

  return (
    <>
      <div>
        <button onClick={() => rolar()}>Abrir Booster</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {mensagem && <p>{mensagem}</p>}
        {resultados.map((resultado, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h2>Booster {index + 1}</h2>
            {resultado.map((token) => (
              <img
                key={token}
                src={`dwx${token}tk.png`}
                alt="Token"
                style={{ marginRight: '0.5rem' }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export { App }
