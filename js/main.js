let loginPage = document.getElementById("log-page");
let registerPage = document.getElementById("reg-page");
let signLink = document.getElementById("signIn");
let regLink = document.getElementById("register");

regLink.onclick = () => {
  loginPage.classList.add("active");
  registerPage.classList.remove("active");
};
signLink.onclick = () => {
  loginPage.classList.remove("active");
  registerPage.classList.add("active");
};
