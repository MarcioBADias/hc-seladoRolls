import { useState } from 'react'

const App = () => {
  const [resultados, setResultados] = useState([])
  const [historico, setHistorico] = useState(new Set())
  const [mensagem, setMensagem] = useState('')

  const rolar = () => {
    if (historico.size >= 60) {
      setMensagem('Acabaram as escolhas')
      return
    }

    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 15)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 3) {
      let num = gerarNumeroAleatorio(16, 28)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 4) {
      let num = gerarNumeroAleatorio(29, 39)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 5) {
      let numFinal = gerarNumeroFinal()
      if (!historico.has(numFinal)) {
        novoResultado.add(numFinal)
      }
    }

    const arrayResultado = Array.from(novoResultado)
    setResultados((prevResultados) => [...prevResultados, arrayResultado])
    setHistorico(
      (prevHistorico) => new Set([...prevHistorico, ...novoResultado]),
    )
  }

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const formatarNumero = (numero) => {
    if ([8, 23, 29, 31].includes(numero)) {
      return `0${numero}a`
    }
    return numero.toString().padStart(3, '0')
  }

  const gerarNumeroFinal = () => {
    const opcoes = [...gerarRange(14, 45), '023b', '031b', '037b']
    const index = Math.floor(Math.random() * opcoes.length)
    return opcoes[index]
  }

  const gerarRange = (start, end) => {
    let array = []
    for (let i = start; i <= end; i++) {
      array.push(formatarNumero(i))
    }
    return array
  }

  return (
    <>
      <div>
        <button onClick={rolar}>Abrir Booster</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {mensagem && <p>{mensagem}</p>}
        {resultados.map((resultado, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h2>Booster {index + 1}</h2>
            {resultado.map((token) => (
              <img
                key={token}
                src={`https://hcunits.net/static/images/set/spv/${token}.png`}
                alt={`Token ${token}`}
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
