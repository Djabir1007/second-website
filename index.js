// Импорт
import { models } from "./models.js";

// Описание карточек товаров
const productCards = document.querySelectorAll(
  ".headphones__card, .wireless__card"
);

productCards.forEach((card) => {
  card.addEventListener("click", function () {
    const productId = this.getAttribute("data-product-id");

    window.location.href = `product.html?product=${productId}`;
  });
});

// Header
const mainBtn = document.querySelector(".header__list");

function toggleMainPhoneList() {
  const wrapper = document.querySelector(".header__list-wrapper");
  const phoneList = wrapper.querySelector(".header__phone-list");
  const myBtn = document.querySelector(".header__list-wrapper-item-btn");

  phoneList.classList.toggle("active");
  myBtn.classList.toggle("rotate");
}

mainBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleMainPhoneList();
});

const brandBtns = document.querySelectorAll(".brand-toggle-btn");

brandBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const brandItem = btn.closest(".header__phone-list-brand");

    const modelsList = brandItem.querySelector(".header__phone-list-models");
    const brandName = brandItem
      .querySelector(".header__phone-list-brand-title")
      .textContent.trim();

    const brandModels = models[brandName];

    const html = brandModels.map((el) => `<li><a>${el}</a></li>`).join("");
    modelsList.innerHTML = html;
    modelsList.classList.toggle("active");
  });
});

//cart.html
const cartBtn = document.querySelector(".cart__btn");

cartBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
