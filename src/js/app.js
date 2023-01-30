if (document.querySelector(".main")) {
  const button = document.querySelector(".tn-btn__primary");
  const handleClick = () => {
    if (true) {
      window.location.href = "question.html";
    } else {
      document.querySelector(".js_btn").click();
    }
  };

  button.addEventListener("click", handleClick);
}

// API=======================================================
// ===============================================================
const REQUEST_URL = "https://jsonplaceholder.typicode.com/users";

function sendRequest() {
  return fetch(REQUEST_URL);
}
sendRequest("GET", REQUEST_URL)
  .then((response) => response.json())
  .then((json) => console.log(json));

////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

const refs = {
  radio1: document.getElementById("radio-1"),
  radio2: document.getElementById("radio-2"),
  radio3: document.getElementById("radio-3"),
  radio4: document.getElementById("radio-4"),
  loader: document.querySelector(".loader"),
  form: document.querySelector(".form__wrapper"),
};

refs.radio1.addEventListener("change", onToggleCheck);
refs.radio2.addEventListener("change", onToggleCheck);
refs.radio3.addEventListener("change", onToggleCheck);
refs.radio4.addEventListener("change", onToggleCheck);

// // ====================================================================
// DISABLED
// =====================================================================
function onToggleCheck() {
  if (refs.radio1.checked) {
    refs.radio3.disabled = false;
    refs.radio4.disabled = false;
  } else if (refs.radio2.checked) {
    refs.radio3.disabled = true;
    refs.radio4.disabled = true;
  }
}

// ============================================
// SUBMIT FORM
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  return (document.location.href = "loader.html");
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// ЗАГРУЗКА И СТРАНИЦЫ
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//

// function onLoaderPage() {
//   setTimeout(function () {
//     document.location.href = "answer.html";
//   }, 3000);
// }

// if (document.readyState === "complete") {
//   // ещё загружается, ждём события
//   refs.loader.addEventListener("DOMContentLoaded", () => {
//     console.log("dfdfdf");
//   });
// } else {
//   // DOM готов!
//   onLoaderPage();
// }

// if ((document.location.href = "loader.html")) {
//   alert();
// }
