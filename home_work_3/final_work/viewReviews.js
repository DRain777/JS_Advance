








  document.addEventListener("DOMContentLoaded", function () {
    // Получаем список отзывов из localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const reviewsList = document.querySelector(".reviews-list");

    // Функция для отображения отзывов
    function showReviews(productName) {
      const productReviews = reviews.filter(
        (review) => review.productName === productName
      );
      const productItem = document.getElementById(productName);
      const reviewsContainer = productItem.querySelector(".reviews-container");
      reviewsContainer.innerHTML = "";
      productReviews.forEach((review) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        const reviewText = document.createElement("p");
        reviewText.textContent = review.reviewText;
        reviewText.classList.add("review-text");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", function () {
          // Удаляем отзыв из localStorage
          const index = reviews.findIndex(
            (item) =>
              item.productName === productName &&
              item.reviewText === review.reviewText
          );
          reviews.splice(index, 1);
          localStorage.setItem("reviews", JSON.stringify(reviews));
          // Удаляем отзыв из DOM
          reviewItem.remove();
          // Если для продукта больше нет отзывов, удаляем его
          if (
            reviews.filter((item) => item.productName === productName)
              .length === 0
          ) {
            productItem.remove();
            if (document.querySelectorAll(".product-item").length === 0) {
              const noReviewsMessage = document.createElement("p");
              noReviewsMessage.textContent = "Отзывы отсутствуют";
              reviewsList.appendChild(noReviewsMessage);
            }
          }
        });
        reviewItem.appendChild(reviewText);
        reviewItem.appendChild(deleteButton);
        reviewsContainer.appendChild(reviewItem);
      });
    }

    // Перебираем все отзывы и строим список продуктов с отзывами
    const products = [...new Set(reviews.map((review) => review.productName))];
    if (products.length === 0) {
      const noReviewsMessage = document.createElement("p");
      noReviewsMessage.textContent = "Отзывы отсутствуют";
      reviewsList.appendChild(noReviewsMessage);
    } else {
      products.forEach((productName) => {
        const productItem = document.createElement("div");
        productItem.setAttribute("id", productName);
        productItem.classList.add("product-item");
        productItem.innerHTML = `
                        <h3>${productName}</h3>
                        <div class="reviews-container hide"></div>
                        <button class="toggle-reviews-btn">Показать отзывы</button>
                    `;
        const toggleButton = productItem.querySelector(".toggle-reviews-btn");
        toggleButton.addEventListener("click", function () {
          const reviewsContainer =
            productItem.querySelector(".reviews-container");
          if (reviewsContainer.classList.contains("hide")) {
            reviewsContainer.classList.remove("hide");
            toggleButton.textContent = "Скрыть отзывы";
            showReviews(productName);
          } else {
            reviewsContainer.classList.add("hide");
            toggleButton.textContent = "Показать отзывы";
          }
        });
        reviewsList.appendChild(productItem);
      });
    }
  });