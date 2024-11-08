import { useState, useEffect } from 'react'

const App = () => {
  const [resultados, setResultados] = useState([])
  const [historico, setHistorico] = useState(new Set())
  const [mensagem, setMensagem] = useState('')

  const rolar = () => {
    if (historico.size >= 99) {
      setMensagem('Acabaram os bonecos')
      return
    }

    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 16)
      if (!historico.has(num)) {
        novoResultado.add(num)

  const [resultado, setResultado] = useState([])
  const [historico, setHistorico] = useState(new Set())

  const rolar = () => {
    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 16)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 3) {
      let num = gerarNumeroAleatorio(17, 29)
      if (!historico.has(num)) {
        novoResultado.add(num)
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 4) {
      let num = gerarNumeroAleatorio(30, 41)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 5) {
      let num = gerarNumeroAleatorio(30, 41)
      let num = gerarNumeroFinal()
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
      ...gerarRange(17, 29),
      ...gerarRange(49, 60),
      '031b',
      '037b',
      '043b',
      '047b',
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
        {mensagem && <p>{mensagem}</p>}
        {resultados.map((resultado, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h2>Booster {index + 1}</h2>
            {resultado.map((token) => (
              <img
                key={token}
                src={`bp${token}tk.png`}
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
