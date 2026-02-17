const inputs = document.querySelectorAll(".pin input");
const btn = document.getElementById("unlockBtn");
const hint = document.getElementById("hint");

inputs.forEach((input, i) => {
  input.addEventListener("input", () => {
    if (input.value && inputs[i + 1]) inputs[i + 1].focus();
  });
});

btn.addEventListener("click", () => {
  const code = [...inputs].map(i => i.value).join("");
  if (code === "21") {
    window.location.href = "slideshow.html";
  } else {
    hint.innerText = "Not yet… but soon 💭";
  }
});
