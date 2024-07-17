import { useState, useEffect } from 'react'

const App = () => {
<<<<<<< HEAD
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
=======
  const [resultado, setResultado] = useState([])
  const [historico, setHistorico] = useState(new Set())

  const rolar = () => {
    let novoResultado = new Set()

    while (novoResultado.size < 2) {
      let num = gerarNumeroAleatorio(1, 17)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
>>>>>>> bb1193ef51758e760feeffb5e46f5fbed022ac65
      }
    }

    while (novoResultado.size < 3) {
      let num = gerarNumeroAleatorio(18, 32)
      if (!historico.has(num)) {
<<<<<<< HEAD
        novoResultado.add(num)
=======
        novoResultado.add(formatarNumero(num))
      }
    }

    while (novoResultado.size < 4) {
      let num = gerarNumeroAleatorio(33, 46)
      if (!historico.has(num)) {
        novoResultado.add(formatarNumero(num))
>>>>>>> bb1193ef51758e760feeffb5e46f5fbed022ac65
      }
    }

    while (novoResultado.size < 5) {
<<<<<<< HEAD
      let num = gerarNumeroAleatorio(33, 48)
=======
      let num = gerarNumeroFinal()
>>>>>>> bb1193ef51758e760feeffb5e46f5fbed022ac65
      if (!historico.has(num)) {
        novoResultado.add(num)
      }
    }

<<<<<<< HEAD
    // Adiciona o novo resultado formatado ao histórico e ao array de resultados
    const arrayResultado = Array.from(novoResultado).map(formatarNumero)
    setResultados((prevResultados) => [...prevResultados, arrayResultado])
    setHistorico(
      (prevHistorico) => new Set([...prevHistorico, ...novoResultado]),
    )
=======
    setResultado(Array.from(novoResultado))
    setHistorico(new Set([...historico, ...novoResultado]))
    console.log(resultado)
>>>>>>> bb1193ef51758e760feeffb5e46f5fbed022ac65
  }

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const formatarNumero = (numero) => {
    return numero.toString().padStart(3, '0')
  }

<<<<<<< HEAD
=======
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

>>>>>>> bb1193ef51758e760feeffb5e46f5fbed022ac65
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
