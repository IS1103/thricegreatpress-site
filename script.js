// Checkout links — fill in with the Whop checkout URLs once the products exist.
// Buttons whose link is still empty scroll to the relevant section instead.
const CHECKOUT = {
  v1: "https://whop.com/genesis-six-press/products/the-kybalion-hardcover-volume-i/",      // The Kybalion, hardcover
  v2: "https://whop.com/genesis-six-press/products/corpus-hermeticum-hardcover-volume-ii/",      // Corpus Hermeticum, hardcover
  v3: "https://whop.com/genesis-six-press/products/the-emerald-tablet-hardcover-volume-iii/",      // The Emerald Tablet, hardcover
  set: "https://whop.com/genesis-six-press/products/the-thrice-great-library-all-three-hardcovers/",     // All three hardcovers + digital edition
  digital: "https://whop.com/genesis-six-press/products/the-thrice-great-library-digital-edition-pdf/", // Digital edition of all three
};

document.querySelectorAll("[data-checkout]").forEach((el) => {
  const url = CHECKOUT[el.dataset.checkout];
  if (url) {
    el.href = url;
  } else if (el.getAttribute("href") === "#") {
    el.href = el.dataset.checkout === "set" || el.dataset.checkout === "digital" ? "#set" : "#books";
  }
});
