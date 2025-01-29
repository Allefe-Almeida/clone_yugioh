export function carregarCartas() {
  fetch("src/data/cartas.json")
    .then((response) => response.json())
    .then((cartasData) => {
      const listaPersonagens = document.querySelector(".lista-personagens");

      // Para cada carta no JSON, cria um novo elemento HTML e adiciona à lista
      cartasData.forEach((carta) => {
        const cartaCriada = criarCarta(carta);
        listaPersonagens.appendChild(cartaCriada);
      });

      // Garantir que a primeira carta tenha a classe 'selecionado'
      const primeiraCarta = listaPersonagens.querySelector(".carta");
      if (primeiraCarta) {
        primeiraCarta.classList.add("selecionado");
      }
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
}

function criarCarta(carta) {
  const li = document.createElement("li");
  li.classList.add("carta", carta.fundo);

  const estrelas = [...Array(carta.estrelas)]
    .map((_, i) => `<span class="estrela"></span>`)
    .join("");

  li.innerHTML = `
      <div class="carta-virada"></div>
      <h2 class="nome">${carta.nome}</h2>
      <div class="nivel-carta">
        ${estrelas} 
      </div>
      <img src="${carta.imagem}" alt="${carta.nome}" class="imagem-carta">
      <div class="informacoes">
        <p class="descricao">${carta.descricao}</p>
        <div class="informacoes-ataque">
          <span class="ataque">ATK/ ${carta.ataque}</span>
          <span class="defesa">DFE/ ${carta.defesa}</span>
        </div>
      </div>
    `;

  return li;
}
