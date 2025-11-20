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

// Кнопка "Выбрать модель телефона"
const buttonCard = document.querySelectorAll(".header__list-wrapper-item-btn");

buttonCard.forEach((btn) => {
  btn.addEventListener("click", function () {
    const img = this.querySelector("img");
    img.classList.toggle("rotate");

    if (this.closest(".header__list-wrapper-header")) {
      const wrapper = this.closest(".header__list-wrapper");
      const phoneList = wrapper.querySelector(".header__phone-list");
      phoneList.classList.toggle("active");
      return;
    }
    if (this.closest(".header__phone-list-brand-header")) {
      const brandItem = this.closest(".header__phone-list-brand");
      const phoneModelsList = brandItem.querySelector(
        ".header__phone-list-models"
      );

      const brandName = brandItem
        .querySelector(".header__phone-list-brand-title")
        .textContent.trim();

      const brandModels = models[brandName];

      const html = brandModels
        .map(
          (m) => `<li>
      <a>${m}</a></li>`
        )
        .join("");

      if (phoneModelsList.classList.contains("active")) {
        phoneModelsList.innerHTML = "";
        phoneModelsList.classList.remove("active");
      } else {
        phoneModelsList.innerHTML = html;
        phoneModelsList.classList.add("active");
      }
      return;
    }
  });
});
