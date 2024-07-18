const userName_var = document.getElementById("userName");
const password_var = document.getElementById("password");
const form = document.getElementById("form");
const button = document.getElementById("button");
const show = document.getElementById("show");

// show password when user click the button
const showPassword = () => {
  const type = password_var.attributes.getNamedItem("type");
  type.value === "text" ? (type.value = "password") : (type.value = "text");
};

show.addEventListener("click", showPassword);

// sumbit form
const Form = (event) => {
  event.preventDefault();
  const userName = userName_var.value;
  const password = password_var.value;
  const error = document.getElementById("error");
  if (userName === "Mana-Maham" && password === "M@n@-M@h@m") {
    error.innerHTML = "";
    window.open("main.html", "_blank");
  } else {
    return (error.innerHTML = "Username or password is wrong");
  }
};

form.addEventListener("submit", Form);
