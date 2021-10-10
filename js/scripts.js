const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 500;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        totalPrice = 800;
        totalPriceTag.textContent = totalPrice;
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});