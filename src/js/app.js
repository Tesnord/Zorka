// API=======================================================
// ===============================================================
if (document.querySelector(".main")) {
  
  const REQUEST_URL = "https://jsonplaceholder.typicode.com/users/12";

  function sendRequest() {
    return fetch(REQUEST_URL);
  }

  document.querySelector(".tn-btn__primary").addEventListener("click", event => {
    sendRequest("GET", REQUEST_URL)
    .then((response) => response.json())
    .then((json) => {
      if (true) {
        console.log(json);
        window.location.href = "question.html";
      } else {
        document.querySelector(".js_btn").click();
      }
    });
  });
}


////////////////////////////////////////////////////////////////////////
if (document.querySelector(".question")) { 
  const refs = {
    radio1: document.getElementById("radio-1"),
    radio2: document.getElementById("radio-2"),
    radio3: document.getElementById("radio-3"),
    radio4: document.getElementById("radio-4"),
    loader: document.querySelector(".loader"),
    form: document.querySelector(".form__button"),
  };

  refs.radio1.addEventListener("change", event => {
    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
  });
  refs.radio2.addEventListener("change", event => {
    if (document.querySelectorAll('.collapse .show')) {
      const collapseElementList = document.querySelectorAll('.collapse')
      const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
    }
    if (refs.radio3.checked || refs.radio4.checked) {
      refs.radio3.checked = false
      refs.radio4.checked = false
    }
  });

  /*
  *   SUBMIT FORM
  */
  refs.form.addEventListener("click", event => {
    
  });

  function onFormSubmit(evt) {
    evt.preventDefault();

    return (document.location.href = "loader.html");
  }
}


/*
*   ЗАГРУЗКА И СТРАНИЦЫ
*/

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
