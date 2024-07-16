import { useState, useEffect } from 'react'

const App = () => {
  const [resultado, setResultado] = useState([])
  const [historico, setHistorico] = useState(new Set())

  const rolar = () => {
    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 17)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 3) {
      let num = gerarNumeroAleatorio(18, 32)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 4) {
      let num = gerarNumeroAleatorio(33, 46)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 5) {
      let num = gerarNumeroFinal()
      if (!historico.has(num)) {
        novoResultado.add(num)
      }
    }

    setResultado(Array.from(novoResultado))
    setHistorico(new Set([...historico, ...novoResultado]))
    console.log(resultado)
  }

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const formatarNumero = (numero) => {
    return numero.toString().padStart(3, '0')
  }

  const gerarNumeroFinal = () => {
    const opcoes = [
      ...gerarRange(18, 32),
      ...gerarRange(47, 70),
      '037b',
      '043b',
      '047b',
      '051b',
      '053b',
    ]
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
        <button onClick={() => rolar()}>Abrir Booster</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {resultado.map((token) => (
          <img
            key={crypto.randomUUID()}
            src={`dwx${token}tk.png`}
            alt="Token"
          />
        ))}
      </div>
    </>
  )
}

export { App }
