import { carregarCartas } from "./carregarCartas.js";

document.addEventListener("DOMContentLoaded", () => {
  carregarCartas();
});

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaAtual = 0;

btnAvancar.addEventListener("click", () => {
  const cartas = document.querySelectorAll(".carta");

  restaurarCarta(cartas[cartaAtual]);

  cartas[cartaAtual].classList.remove("selecionado");

  cartaAtual++;

  if (cartaAtual >= cartas.length) {
    cartaAtual = 0;
  }

  cartas[cartaAtual].classList.add("selecionado");
});

btnVoltar.addEventListener("click", () => {
  const cartas = document.querySelectorAll(".carta");

  restaurarCarta(cartas[cartaAtual]);

  cartas[cartaAtual].classList.remove("selecionado");

  cartaAtual--;

  if (cartaAtual < 0) {
    cartaAtual = cartas.length - 1;
  }

  cartas[cartaAtual].classList.add("selecionado");
});

function restaurarCarta(carta) {
  if (!carta) return;

  carta.classList.remove("virar");

  const cartaVirada = carta.querySelector(".carta-virada");
  cartaVirada.classList.remove("mostrar-fundo-carta");

  const descricao = carta.querySelector(".descricao");
  descricao.classList.remove("hidden");
}

// Função para manipular o clique na carta (virar)
document.addEventListener("click", (e) => {
  if (e.target.closest(".carta")) {
    const carta = e.target.closest(".carta");

    const cartaVirada = carta.querySelector(".carta-virada");

    carta.classList.toggle("virar");

    cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao = carta.querySelector(".descricao");
    descricao.classList.toggle("hidden");
  }
});
