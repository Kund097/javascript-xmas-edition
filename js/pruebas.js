function testValiteName() {
    console.assert(
        validateName("") === "El campo nombre debe tener al menos 1 caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validateName(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "El campo nombre debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );

    console.assert(
        validateName("asdas21313123avba") === "El campo nombre solo debe tener letras",
        "Validar nombre no validó que el nombre solo tenga letras"
    );

    console.assert(
        validateName("Facu") === "",
        "Validar nombre no validó que el nombre sea correcto"
    );
}

function testValidateCity() {
    console.assert(
        validateCity("") === "El campo ciudad no debe estar vacio",
        "Validar ciudad no validó que el campo ciudad no sea vacío"
    );

    console.assert(
        validateCity("Santa fe") === "",
        "Validar ciudad no validó que se ingrese un valor correcto"
    );
}

function testValidateGiftDescription() {
    let length251 =
        "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
    console.assert(
        validateGiftDescription(length251) ===
            "El campo descripción del regalo debe tener entre 2 y 250 caracteres",
        "Validar descripción regalo, no validó que haya más de 250 caracteres"
    );

    console.assert(
        validateGiftDescription("1") ===
            "El campo descripción del regalo debe tener entre 2 y 250 caracteres",
        "Validar descripción regalo, no validó que haya al menos 2 caracteres"
    );
    console.assert(
        validateGiftDescription("Hola santa... ") === "",
        "Validar descripción regalo, no validó que se ingrese un valor correcto"
    );
}
testValiteName();
testValidateCity();
testValidateGiftDescription();
