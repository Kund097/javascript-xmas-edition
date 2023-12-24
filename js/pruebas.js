function testValiteName() {
    console.assert(
        validateName("") === "Este campo debe tener al menos 1 caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validateName(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );

    console.assert(
        validateName("facu") === "",
        "Validar nombré no validó que el nombre sea correcto"
    );
}

function testValidateCity() {
    console.assert(
        validateCity("") === "Este campo no debe estar vacio",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validateCity("santa fe") === "",
        "Validar ciudad no validó que se ingrese un valor correcto"
    );
}

function testValidateGiftDescription() {
    let length250 =
        "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
    console.assert(
        validateGiftDescription(length250) ===
            "La descripción del regalo no debe tener más de 250 caracteres",
        "Validar descripción regalo, no validó que haya más de 250 caracteres"
    );

    console.assert(
        validateGiftDescription("1") ===
            "Este campo debe tener al menos 2 caracteres",
        "Validar descripción regalo, no validó que haya al menos 2 caracteres"
    );
    console.assert(
        validateGiftDescription("hola") === "",
        "Validar descripción regalo, no validó que se ingrese un valor correcto"
    );
}
testValiteName();
testValidateCity();
testValidateGiftDescription();
