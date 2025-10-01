document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioCalorias");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const edad = parseFloat(document.getElementById("edad").value);
    const actividadNivel = document.getElementById("actividad").value;
    const deficit = parseFloat(document.getElementById("deficit").value);


    if (!sexo || isNaN(peso) || isNaN(altura) || isNaN(edad) || !actividadNivel || isNaN(deficit)) {
      resultado.innerHTML = "<p>Por favor, completa todos los campos correctamente.</p>";
      return;
    }


    

   let tmb;
if (sexo === "hombre") {
  tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
} else {
  tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
}


const actividadFactor = {
  "1": 1.2,
  "2": 1.375,
  "3": 1.55,
  "4": 1.725
}[actividadNivel];

const gastoEnergico = tmb * actividadFactor;
const caloriasDiarias = gastoEnergico - deficit;


resultado.innerHTML = `
  <p><strong>Tu metabolismo basal (TMB):</strong> ${tmb.toFixed(2)} cal/día</p>
  <p><strong>Tu gasto energético total:</strong> ${gastoEnergico.toFixed(2)} cal/día</p>
  <p><strong>Calorías recomendadas con déficit:</strong> ${caloriasDiarias.toFixed(2)} cal/día</p>
`;
  });
})
