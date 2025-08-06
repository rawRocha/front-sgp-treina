const formLogin = document.querySelector(".form-login");
const inpEmail = document.querySelector("#email");
const inpPassword = document.querySelector("#senha");

console.log("Hello World!");

formLogin.addEventListener("submit", (e) => {
  if (inpEmail.value == "user@email.com" && inpPassword.value == "123123") {
  } else {
    e.preventDefault();
    console.log("Usuario invalido!");

    const newErrorWarn = document.createElement("span");
    newErrorWarn.classList.add("newErrorOrWarn");
    newErrorWarn.innerText = "Credenciais inválidas!";

    const elementoExists = document.querySelector(".newErrorOrWarn");

    if (!elementoExists) {
      formLogin.after(newErrorWarn);
    }
  }
});
