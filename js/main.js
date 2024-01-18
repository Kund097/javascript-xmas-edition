const $form = document.form;
$form.onsubmit = validateForm;

function validateForm(event) {
    removePreviousLiErrors();
    const errors = {
        name: "",
        city: "",
        "gift-description": "",
    };
    errors.name = validateName(getName());
    errors.city = validateCity(getCity());
    errors["gift-description"] = validateGiftDescription(getGiftDescription());

    const itsSuccess = handleErrors(errors);
    itsSuccess ? insertErrors(errors) : formSuccessful();

    event.preventDefault();
}

function handleErrors(errors) {
    let counterErrors = 0;
    Object.entries(errors).forEach(([key, value]) => {
        document.form[key].classList.toggle("error", value);
        value ? counterErrors++ : counterErrors;
    });
    return counterErrors;
}

function getName() {
    return document.form.name.value;
}

function getCity() {
    return document.form.city.value;
}

function getGiftDescription() {
    return document.form["gift-description"].value;
}

function insertErrors(errors) {
    const $listErrors = document.querySelector("#errors");

    Object.values(errors).forEach((value) => {
        if (value) {
            const $error = document.createElement("li");
            $error.textContent = value;
            $listErrors.appendChild($error);
        }
    });
}

function removePreviousLiErrors() {
    const $listErrors = document.querySelectorAll("#errors li");
    if ($listErrors) {
        $listErrors.forEach(function (liItem) {
            liItem.remove();
        });
    }
}

function formSuccessful() {
    disguiseForm();
    showSuccessElement();
    setTimeout(redirectionToWishList,5000);
}

function disguiseForm() {
    $form.className = "hidden";
}

function showSuccessElement() {
    document.querySelector("#success").className = "";
}

function redirectionToWishList() {
    window.location.href = "wishlist.html";
}
