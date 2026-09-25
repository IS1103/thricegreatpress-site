// Checkout links — fill in with the Whop checkout URLs once the products exist.
// Buttons whose link is still empty scroll to the relevant section instead.
const CHECKOUT = {
  v1: "",      // The Kybalion, hardcover
  v2: "",      // Corpus Hermeticum, hardcover
  v3: "",      // The Emerald Tablet, hardcover
  set: "",     // All three hardcovers + digital edition
  digital: "", // Digital edition of all three
};

document.querySelectorAll("[data-checkout]").forEach((el) => {
  const url = CHECKOUT[el.dataset.checkout];
  if (url) {
    el.href = url;
  } else if (el.getAttribute("href") === "#") {
    el.href = el.dataset.checkout === "set" || el.dataset.checkout === "digital" ? "#set" : "#books";
  }
});
