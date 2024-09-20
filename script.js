const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});
