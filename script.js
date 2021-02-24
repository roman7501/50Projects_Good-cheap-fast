const option1El = document.getElementById("option-1");
const option2El = document.getElementById("option-2");
const option3El = document.getElementById("option-3");

const optionEls = document.querySelectorAll(".toggle");

let index = 0;

optionEls.forEach((opt) => {
  opt.addEventListener("click", () => {
    opt.classList.toggle("active");

    const activeEls = document.querySelectorAll(".active");

    index = activeEls.length;

    if (index > 2) {
      if (opt.id === "option-1") {
        option3El.classList.remove("active");
      }
      if (opt.id === "option-2") {
        option1El.classList.remove("active");
      }
      if (opt.id === "option-3") {
        option2El.classList.remove("active");
      }
    }
  });
});
