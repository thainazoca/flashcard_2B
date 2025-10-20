function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementBlyd('container');
    let cartao = document.createElement('article');
    cartao.ClassName = 'cartao';
}

cartao.innerHTML =
<div class="cartao_conteudo">
    <h3>Programação</h3>
    <div class="cartao_conteudo_pergunta">
        <p>O que é JavaScript</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>O JavaScript é uma linguagem de Programação</p>
    </div>
</div>

 let respostaEstaVisivel = false;

  function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
  }
    cartao.addEventListener('click', viraCartao)
  
    container.appendChild(cartao)
}