let carrinho = [];

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  alert(produto + " foi adicionado ao carrinho!");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com os seguintes itens: " + carrinho.join(", "));
  carrinho = []; // Limpa o carrinho após a compra
  document.getElementById("carrinho").innerHTML = ""; // Limpa a lista do carrinho
}
