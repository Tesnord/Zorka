/*
*   API
*/

if (document.querySelector(".main")) {
  const REQUEST_URL = "https://jsonplaceholder.typicode.com/users";

  function sendRequest() {
    return fetch(REQUEST_URL);
  }

  document.querySelector(".tn-btn__primary").addEventListener("click", () => {
    sendRequest("GET", REQUEST_URL)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          console.log(json);
          // window.location.href = "question.html";
        } else {
          console.log(json);
          // document.querySelector(".js_btn").click();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const arr = {};

if (document.querySelector(".question")) {
  const refs = {
    radio1: document.getElementById("radio-1"),
    radio2: document.getElementById("radio-2"),
    radio3: document.getElementById("radio-3"),
    radio4: document.getElementById("radio-4"),
    loader: document.querySelector(".loader"),
    form: document.querySelector(".form__button"),
  };

  refs.radio1.addEventListener("change", () => {
    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
  });
  refs.radio2.addEventListener("change", () => {
    if (document.querySelector('.show')) {
      const collapseElementList = document.querySelectorAll('.collapse')
      const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
    }
    if (refs.radio3.checked || refs.radio4.checked) {
      refs.radio3.checked = false;
      refs.radio4.checked = false;
    }
  });

  /*
  *   SUBMIT FORM
  */

  refs.form.addEventListener("click", () => {
    if (refs.radio1.checked) {
      localStorage.setItem('questionOne', 'video script')
      if (refs.radio3.checked) {
        localStorage.setItem('questionTwo', 'influencer ads')
      } else if (refs.radio4.checked) {
        localStorage.setItem('questionTwo', 'promo video')
      } else {
        localStorage.removeItem('questionTwo')
      }
    } else if (refs.radio2.checked) {
      localStorage.setItem('questionOne', 'CTA')
      localStorage.removeItem('questionTwo')
    }
    localStorage.setItem('product', document.querySelector('#form__create').value)
    localStorage.setItem('name', document.querySelector('#form__product').value)
    window.location.href = "answer.html"
  });
}


if (document.querySelector('.answer')) {
  if (localStorage.getItem('questionOne') === 'video script') {
    if (localStorage.getItem('questionTwo') == 'influencer ads') {
      document.querySelector('.answer__result-text').innerHTML = `Create a <span>${localStorage.getItem('questionOne')}</span> for <span>${localStorage.getItem('questionTwo') ?? ''}</span> for the <span>${localStorage.getItem('product')} ${localStorage.getItem('name')}</span>`
    } else {
      document.querySelector('.answer__result-text').innerHTML = `Create a <span>${localStorage.getItem('questionOne')}</span> for a <span>${localStorage.getItem('questionTwo') ?? ''}</span> for the <span>${localStorage.getItem('product')} ${localStorage.getItem('name')}</span>`
    }
  } else {
    document.querySelector('.answer__result-text').innerHTML = `Create a <span>${localStorage.getItem('questionOne')}</span> for <span>${localStorage.getItem('product')} ${localStorage.getItem('name')} with no more than 5 words</span>`
  }
}

  /*
   *   ЗАГРУЗКА И СТРАНИЦЫ
   */

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
  if (window.location.href = "loader.html") {
    function onLoaderPage() {
      setTimeout(function () {
        window.location.href = "answer.html";
      }, 3000);
    }
  }
