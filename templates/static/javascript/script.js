// Troca a imagem do produto principal pelas imagens extras
function trocarImagem(novaSrc) {
    const imagemPrincipal = document.getElementById('main-product-image');
    imagemPrincipal.src = novaSrc;
}


// Aumenta a imagem clicada
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const buyerImages = document.querySelectorAll(".buyer-img");
const mainImage = document.querySelector(".main-product-img");

buyerImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.remove("d-none");
    });
});

if (mainImage) {
    mainImage.addEventListener("click", () => {
      lightboxImg.src = mainImage.src;
      lightbox.classList.remove("d-none");
    });
  }

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.add("d-none");
        lightboxImg.src = "";
    }
});






// Mensagem de adicionado ao carrinho com sucesso
document.getElementById("addToCartBtn").addEventListener("click", function () {
const alertBox = document.getElementById("alert-container");
alertBox.style.display = "block";

setTimeout(() => {
    const bsAlert = bootstrap.Alert.getOrCreateInstance(alertBox.querySelector('.alert'));
    bsAlert.close();
}, 2500);
});


