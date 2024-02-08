document.addEventListener("DOMContentLoaded", function () {
  const thumbnailContainer = document.querySelector(".thumbanail-container");
  const moreImageContainers = document.querySelectorAll(".more-image-container");

  moreImageContainers.forEach(function (moreImageContainer) {
    moreImageContainer.addEventListener("click", function (event) {
      const clickedImageSrc = event.target.src;
      thumbnailContainer.innerHTML = `<img src="${clickedImageSrc}" />`;
    });
  });

  const quantityElement = document.querySelector('.Quantity');

  document.querySelector('.Dcrease-quantity').addEventListener('click', function () {
    let currentValue = parseInt(quantityElement.textContent);
    if (currentValue > 0) {
      quantityElement.textContent = currentValue - 1;
    }
  });

  document.querySelector('.increase-quantity').addEventListener('click', function () {
    let currentValue = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentValue + 1;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".add-to-cart-button");
  const purchaseMessageContainer = document.querySelector(".purchase-message-container");

  addToCartButton.addEventListener("click", function () {
    const selectedColor = document.querySelector('input[name="choosen_color"]:checked');
    const selectedSize = document.querySelector('input[name="choosen_size"]:checked');
    const quantity = parseInt(document.querySelector('.Quantity').textContent);

    if (selectedColor && selectedSize && quantity > 0) {
      const color = selectedColor.value;
      const size = selectedSize.value;
      const message = `Embrace Sideboard with Color ${color} and Size ${size} added to cart`;
      purchaseMessageContainer.querySelector('.purchase-messaage').textContent = message;
      purchaseMessageContainer.style.display = "block";
    } else {
      // Display a message indicating that color, size, or quantity is not selected
      alert("Please select color, size, and quantity before adding to cart.");
    }
  });
});
