// Описание карточек товаров
const productCards = document.querySelectorAll(
  ".headphones__card, .wireless__card"
);
console.log(productCards);
productCards.forEach((card) => {
  card.addEventListener("click", function () {
    const productId = this.getAttribute("data-product-id");

    window.location.href = `product.html?product=${productId}`;
  });
});
