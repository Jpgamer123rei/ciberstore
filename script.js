let carrinho = [];

function mostrarHome() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('produtos').style.display = 'none';
  document.getElementById('carrinho').style.display = 'none';
}

function mostrarProdutos() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('produtos').style.display = 'block';
  document.getElementById('carrinho').style.display = 'none';
}

function mostrarCarrinho() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('produtos').style.display = 'none';
  document.getElementById('carrinho').style.display = 'block';
  renderizarCarrinho();
}

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  alert(`${nome} adicionado ao carrinho!`);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  const itensCarrinho = document.getElementById('itens-carrinho');
  const totalDiv = document.getElementById('total');
  itensCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;
    itensCarrinho.innerHTML += `
            <div>${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button></div>
        `;
  });

  totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert("Compra finalizada! Obrigado pela sua compra!");
    carrinho = [];
    renderizarCarrinho();
    mostrarHome();
  }
}

// Mostrar a home por padrão ao carregar
mostrarHome();

function mostrarNotificacao(mensagem) {
  const notificacao = document.getElementById('notificacao');
  notificacao.innerText = mensagem;
  notificacao.style.display = 'block';
  setTimeout(() => {
    notificacao.style.display = 'none';
  }, 3000); // Esconde a notificação após 3 segundos
}

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  mostrarNotificacao(`${nome} adicionado ao carrinho!`);
  renderizarCarrinho();
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    mostrarNotificacao("Seu carrinho está vazio!");
  } else {
    mostrarNotificacao("Compra finalizada! Obrigado pela sua compra!");
    carrinho = [];
    renderizarCarrinho();
    mostrarHome();
  }
}

function removerDoCarrinho(index) {
  const itemRemovido = carrinho[index].nome; // Captura o nome do item que será removido
  carrinho.splice(index, 1);
  mostrarNotificacao(`${itemRemovido} removido do carrinho!`); // Notifica o usuário
  renderizarCarrinho();
}
