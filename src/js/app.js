if (document.querySelector(".main")) {
  const button = document.querySelector(".tn-btn__primary");
  const handleClick = () => {
    if (false) {
      window.location.href = "question.html";
      // window.location.href = 'answer.html'
    } else {
      document.querySelector(".js_btn").click();
    }
  };

  button.addEventListener("click", handleClick);
}
