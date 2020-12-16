let form = document.getElementById('form');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function showError(inputElement, elementErrorId, errorMessage) {
    let errorElement = document.getElementById(elementErrorId);
    let iconElement = inputElement.nextElementSibling;
    errorElement.classList.add('visible');
    iconElement.style.display = "block";
    inputElement.classList.add('error-state');

    errorElement.innerHTML = errorMessage;
}

function hideError(inputElement, elementErrorId) {
    let errorElement = document.getElementById(elementErrorId);
    let iconElement = inputElement.nextElementSibling;
    errorElement.classList.remove('visible');
    iconElement.style.display = "none";
    inputElement.classList.remove('error-state');
}

form.addEventListener('submit', (event) => {
    if (form.email.value.trim() == "") {
        showError(form.email, "email-error", "Email cannot be empty");
        event.preventDefault();
    } else if (!emailRegExp.test(form.email.value)) {
        showError(form.email, "email-error", "Looks like this is not an email");
        event.preventDefault();
    } else {
        hideError(form.email, "email-error");
    }

    if (form.fname.value.trim() == "") {
        showError(form.fname, "first-name-error", "First name cannot be empty");
        event.preventDefault();
    } else {
        hideError(form.fname, "first-name-error");
    }

    if (form.lname.value.trim() == "") {
        showError(form.lname, "last-name-error", "Last name cannot be empty");
        event.preventDefault();
    } else {
        hideError(form.lname, "last-name-error");
    }

    if (form.password.value.trim() == "") {
        showError(form.password, "password-error", "Password cannot be empty");
        event.preventDefault();
    } else {
        hideError(form.password, "password-error");
    }
})


/* jQuery

    function showError(inputElement, errorMessage) {
    inputElement = $(inputElement);

    let iconElement = inputElement.parent().find('img.icon--error');
    let messageElement = inputElement.parent().find('p.error-message');

    inputElement.addClass('error-state');
    iconElement.show();
    messageElement.addClass('visible');

    messageElement.text(errorMessage);
}

function hideError(inputElement) {
    inputElement = $(inputElement);

    let iconElement = inputElement.parent().find('img.icon--error');
    let messageElement = inputElement.parent().find('p.error-message');

    inputElement.removeClass('error-state');
    iconElement.hide();
    messageElement.removeClass('visible');
}*/