/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

function validateName(name) {
    if (name.length === 0) {
        return "El campo nombre debe tener al menos 1 caracter";
    }

    if (name.length >= 50) {
        return "El campo nombre debe tener menos de 50 caracteres";
    }

    if (!/^[a-z]+$/i.test(name)) {
        return "El campo nombre solo debe tener letras";
    }

    return "";
}

function validateCity(city) {
    if (!/^[a-z ]+$/i.test(city)) {
        return "El campo ciudad no debe estar vacio";
    }

    return "";
}

function validateGiftDescription(giftDescription) {
    if (!/^[a-z ,\.()0-9\-ñ]{2,250}$/i.test(giftDescription)) {
        return "El campo descripción del regalo debe tener entre 2 y 250 caracteres"; 
    }
    return "";
}
