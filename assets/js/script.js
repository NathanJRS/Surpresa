const button = document.getElementById("fleeButton");
const startScreen = document.getElementById("startScreen");
const passwordScreen = document.getElementById("passwordScreen");
const finalScreen = document.getElementById("finalScreen");

const passwordInput = document.getElementById("passwordInput");
const confirmPassword = document.getElementById("confirmPassword");

let clickCount = 0;

// Botão fujão 😈
button.addEventListener("click", () => {

  clickCount++;

 if (clickCount < 6) {

    alert("Ops, não vai ser tão fácil assim! Tenta clicar de novo.");

    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  } else {
    startScreen.classList.add("hidden");
    passwordScreen.classList.remove("hidden");
  }
});

// Defina a senha aqui 👇
const correctPassword = "23/12/2020";

confirmPassword.addEventListener("click", () => {
  if (passwordInput.value === correctPassword) {
    passwordScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");
  } else {
    alert("Hmm… tenta de novo, vai uma dica extra >> É uma data especial 😅❤️");
  }

});
