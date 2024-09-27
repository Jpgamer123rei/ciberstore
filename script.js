let totalCarrinho = 0;
const carrinhoItens = [];

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
}

function adicionarAoCarrinho(nome, preco) {
  carrinhoItens.push({ nome, preco });
  totalCarrinho += preco;

  const carrinhoLista = document.getElementById('carrinhoLista');
  const itemCarrinho = document.createElement('li');
  itemCarrinho.textContent = nome + ' - R$ ' + preco.toFixed(2);
  carrinhoLista.appendChild(itemCarrinho);

  document.getElementById('total').textContent = totalCarrinho.toFixed(2);
}

function finalizarCompra() {
  alert('Compra finalizada! Total: R$ ' + totalCarrinho.toFixed(2));
  carrinhoItens.length = 0; // Limpa o carrinho
  totalCarrinho = 0;
  document.getElementById('carrinhoLista').innerHTML = '';
  document.getElementById('total').textContent = '0';
  mostrarHome(); // Retorna à página inicial
}

// Inicializa a página na aba Home
mostrarHome();
