
var link = document.querySelector(".user-login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close-content");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
// var storage = localStorage.getItem("login");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    //    if (storage) {
    //        login.value = storage;
    //        password.focus();
    //    } else {
    login.focus();
    //    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error")
        }
    }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-close-content");

mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
})

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
})

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});

var letterOpen = document.querySelector(".js-letter-open");
var letterPopup = document.querySelector(".modal-content-reg");
var letterClose = letterPopup.querySelector(".modal-close-content");
var letterForm = letterPopup.querySelector("form");
var fullName = letterPopup.querySelector("[name=full-name]");
var email = letterPopup.querySelector("[name=e-mail]");
var letter = letterPopup.querySelector("[name=textarea]");


letterOpen.addEventListener("click", function (event) {
    event.preventDefault();
    letterPopup.classList.add("modal-content-show");
    fullName.focus();

});

letterForm.addEventListener("submit", function (event) {
    if (!fullName.value || !email.value || !letter.value) {
        event.preventDefault();
        letterPopup.classList.remove("modal-error");
        letterPopup.offsetWidth = popup.offsetWidth;
        letterPopup.classList.add("modal-error");
    }
})
letterClose.addEventListener("click", function (event) {
    event.preventDefault();
    letterPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (letterPopup.classList.contains("modal-content-show")) {
            letterPopup.classList.remove("modal-content-show");

        }
    }
});