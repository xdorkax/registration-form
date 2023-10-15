document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const confirmEmail = form.querySelector("#confirm-email").value;
    const source = form.querySelector("#source").value;
    const consent = form.querySelector("#consent").checked;

    if (!name || !email || !confirmEmail || !source || !consent) {
      message.textContent = "Minden mezőt ki kell tölteni!";
      message.classList.remove("success");
      message.classList.add("error");
    } else if (email !== confirmEmail) {
      message.textContent = "Az email címek nem egyeznek meg!";
      message.classList.remove("success");
      message.classList.add("error");
    } else {
      message.textContent = "Sikeres regisztráció!";
      message.classList.remove("error");
      message.classList.add("success");
      form.reset();
    }
  });
});
