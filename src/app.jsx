import { useState } from 'react'

const App = () => {
  const [resultado, setResultado] = useState('')

  const rolar = () => {
    let array = []
    array.push(gerarNumeroAleatorio(1, 17))
    array.push(gerarNumeroAleatorio(1, 17))
    array.push(gerarNumeroAleatorio(18, 32))
    array.push(gerarNumeroAleatorio(33, 46))
    array.push(gerarNumeroFinal())

    setResultado(array)
    console.log(resultado)
  }

  const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const gerarNumeroFinal = () => {
    const opcoes = [
      ...gerarRange(18, 32),
      ...gerarRange(47, 70),
      '37b',
      '43b',
      '47b',
      '51b',
      '53b',
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
      <p>{resultado}</p>
    </>
  )
}

export { App }
