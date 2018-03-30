"use strict";
var button = document.querySelector(".open-close-button");
var popup = document.querySelector(".search-form");

var checkin = popup.querySelector("[name=check-in]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("seach-form-showed");
    
    if (popup.classList.contains("seach-form-showed")) {
        setTimeout(function() {
            checkin.focus();
        }, 900);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("seach-form-showed")) {
        popup.classList.remove("seach-form-showed");
      }
    }
});

