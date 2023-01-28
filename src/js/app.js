if (document.querySelector(".main")) {
  const button = document.querySelector(".tn-btn__primary");
  const handleClick = () => {
    if (true) {
      window.location.href = "question.html";
      // window.location.href = 'answer.html'
    } else {
      document.querySelector(".js_btn").click();
    }
  };

  button.addEventListener("click", handleClick);
}

// API=======================================================
// ===============================================================

const REQUEST_URL = "https://jsonplaceholder.typicode.com/users";

fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((json) => console.log(json));
