# Heroclix Booster Generator

Um gerador de boosters para Heroclix, simulando sorteios aleatórios de figuras da coleção. Essa aplicação permite abrir boosters com personagens aleatórios, garantindo que nenhum personagem seja repetido até que a coleção se esgote.

## Funcionalidades

- Sorteio de personagens aleatórios em cada booster.
- Exibe até 5 personagens por booster, selecionados de diferentes intervalos da raridade.
- Verificação para evitar repetições de personagens até o limite da coleção.
- Notificação ao usuário quando todos os personagens já foram sorteados.
- Possibilidade de visualizar imagens dos personagens sorteados.

## Tecnologias Utilizadas

- **React** para construção da interface.
- **JavaScript** para a lógica de sorteio e manipulação de dados.
- **CSS** para estilização dos componentes.

## Estrutura do Projeto

- **App.jsx**: Componente principal que gerencia o estado dos boosters, o histórico de sorteios e as mensagens.
- **Funções de Sorteio**:
  - `gerarNumeroAleatorio`: Gera números aleatórios dentro de intervalos especificados.
  - `formatarNumero`: Formata números para três dígitos e adiciona sufixos especiais.
  - `gerarNumeroFinal`: Sorteia números finais especiais, incluindo personagens raros.
  - `gerarRange`: Cria intervalos de números para o sorteio.
  
## Link do Deploy:

hc-seladoroll.netlify.app
