const respuestasCorrectas = {
    p1: true,
    p2: false,
    p3: false,
    p4: true,
    p5: false,
};

// respuestas["p1"]

function verificar(idDivPregunta, respuestaUsuario) {
    // pregunta: p1, p2, p3, p4, p5...

    const p = document.getElementById(idDivPregunta);

    const respuestaCorrecta = respuestasCorrectas[idDivPregunta];

    if (respuestaCorrecta === respuestaUsuario) p.className = "pregunta-correcta";
    else p.className = "pregunta-incorrecta";
}