import { useState } from 'react'

const App = () => {
  const [resultado, setResultado] = useState([])

  const rolar = () => {
    let array = []
    array.push(formatarNumero(gerarNumeroAleatorio(1, 17)))
    array.push(formatarNumero(gerarNumeroAleatorio(1, 17)))
    array.push(formatarNumero(gerarNumeroAleatorio(18, 32)))
    array.push(formatarNumero(gerarNumeroAleatorio(33, 46)))
    array.push(formatarNumero(gerarNumeroFinal()))

    setResultado(array)
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
      array.push(i)
    }
    return array
  }
  return (
    <>
      <button onClick={() => rolar()}>Abrir Booster</button>
      {resultado.map((token) => (
        <img key={token} src={`dwx${token}tk.png`} alt="Token" />
      ))}
      <p>{resultado}</p>
    </>
  )
}

export { App }
