const btn = document.querySelector("button");
const hidden = document.querySelector("span");
let contain;

btn.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
  contain = hidden.classList.contains("hidden");
  contain ? btn.innerText = "...Show More" : btn.innerText = "...Show Less"
})

