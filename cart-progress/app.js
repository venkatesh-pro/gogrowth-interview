const cartBtn = document.querySelectorAll('.cart-btn');
const progressChild = document.getElementById('progress-child');
const shippingMessage = document.getElementById('shipping-message');
const cartTotal = document.getElementById('cart-total');

const freeShippingThreshold = 100;

cartBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const cartValue = Number(btn.value);

    const progressPercent = Math.min((cartValue / freeShippingThreshold) * 100, 100);

    const remainingAmount = freeShippingThreshold - cartValue;

    progressChild.style.width = `${progressPercent}%`;
    progressChild.textContent = `${Math.round(progressPercent)}%`;
    cartTotal.textContent = `₹${cartValue}`;

    if (cartValue >= freeShippingThreshold) {
      shippingMessage.textContent = 'You unlocked free shipping!';
    } else if (progressPercent >= 50) {
      shippingMessage.textContent = `Almost there! Spend ₹${remainingAmount} more to unlock free shipping.`;
    } else {
      shippingMessage.textContent = `Spend ₹${remainingAmount} more to unlock free shipping.`;
    }
  });
});
