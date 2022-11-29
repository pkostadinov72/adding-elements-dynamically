import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const body = document.body;
  body.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      let article = document.createElement("article");
      article.className = "message";
      article.textContent = "sample";
      body.append(article);
    }
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
