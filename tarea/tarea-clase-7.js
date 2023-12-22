/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

function validateName(name) {
    if (name.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }

    if (name.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    return "";
}

function validateCity(city) {
    if (city.length === 0) {
        return "Este campo no debe estar vacio";
    }

    return "";
}

function validateGiftDescription(giftDescription) {
    if (giftDescription.length >= 250) {
        return "La descripción del regalo no debe tener más de 250 caracteres";
    }
    if (giftDescription.length <= 2) {
        return "Este campo debe tener al menos 2 caracteres";
    }

    return "";
}
