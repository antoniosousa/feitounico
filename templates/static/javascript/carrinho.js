document.addEventListener("DOMContentLoaded", () => {
  // Todo seu código atual dentro dessa função
  // Exemplo:

  let cart = [
    {
      id: 1,
      name: "Jarro grego - Peça em Barro, cores azuis detalhadas",
      price: 49.90,
      quantity: 2,
      image:"static/images/cards/card1.webp"

    },
    {
      id: 2,
      name: "Jarro Praia",
      price: 199.90,
      quantity: 1,
      image: "static/images/cards/card2.jpg"
    },
    {
      id: 2,
      name: "Jarro Século XX",
      price: 199.90,
      quantity: 1,
      image: "static/images/cards/card3.jpeg"
    },
    {
      id: 2,
      name: "Peça Barro Peixe",
      price: 199.90,
      quantity: 1,
      image: "static/images/cards/card4.webp"
    },
    {
      id: 2,
      name: "Conjunto Artesal",
      price: 199.90,
      quantity: 1,
      image: "static/images/cards/card5.webp"
    },
    {
      id: 2,
      name: "Peças Lar",
      price: 199.90,
      quantity: 1,
      image: "static/images/cards/card6.webp"
    },
  ];

  const cartTableBody = document.querySelector("#cart-table tbody");
  const totalEl = document.getElementById("total");
  const finalizeBtn = document.getElementById("finalize-btn");

  function formatPrice(value) {
    return value.toFixed(2).replace('.', ',');
  }

  function renderCart() {
    cartTableBody.innerHTML = "";

    cart.forEach(item => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>R$ ${formatPrice(item.price)}</td>
        <td class="quantity-controls">
          <button onclick="decreaseQuantity(${item.id})" ${item.quantity === 1 ? "disabled" : ""}>-</button>
          ${item.quantity}
          <button onclick="increaseQuantity(${item.id})">+</button>
        </td>
        <td>R$ ${formatPrice(item.price * item.quantity)}</td>
        <td><button class="remove-btn" onclick="removeItem(${item.id})">X</button></td>
      `;

      cartTableBody.appendChild(tr);
    });

    updateTotal();
  }

  function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalEl.textContent = formatPrice(total);
  }

  window.increaseQuantity = function(id) {
    const item = cart.find(p => p.id === id);
    if (item) {
      item.quantity++;
      renderCart();
    }
  };

  window.decreaseQuantity = function(id) {
    const item = cart.find(p => p.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
      renderCart();
    }
  };

  window.removeItem = function(id) {
    cart = cart.filter(p => p.id !== id);
    renderCart();
  };

  finalizeBtn.addEventListener("click", () => {
    if(cart.length === 0) {
      alert("Seu carrinho está vazio!");
    } else {
      alert("Compra finalizada! Obrigado por comprar conosco.");
      cart = [];
      renderCart();
    }
  });

  renderCart();
});
