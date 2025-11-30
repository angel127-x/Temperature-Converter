document.addEventListener("DOMContentLoaded", () => {
  validarYHabilitar()
});

let valor = document.getElementById("valor");
let fUnit = document.getElementById("FromUnit");
let tUnit = document.getElementById("ToUnit");
let resultado = document.getElementById("resultado");
let btnConvert = document.getElementById("btnConvertir");

let convertirUnidad = (valor, fUnit, tUnit) => {
  let FromUnidad = {
    Fahrenheit: (valor, tUnit) => {
      const convertir = {
        Celsius: (valor) => ((valor - 32) * 5) / 9,
        Kelvin: (valor) => ((valor - 32) * 5) / 9 + 273.15,
      };
      return convertir[tUnit](valor);
    },
    Celsius: (valor, tUnit) => {
      const convertir = {
        Fahrenheit: (valor) => (valor * 9) / 5 + 32,
        Kelvin: (valor) => valor + 273.15,
      };
      return convertir[tUnit](valor);
    },
    Kelvin: (valor, tUnit) => {
      const convertir = {
        Celsius: (valor) => valor - 273.15,
        Fahrenheit: (valor) => ((valor - 273.15) * 9) / 5 + 32,
      };
      return convertir[tUnit](valor);
    },
  };

  return FromUnidad[fUnit](valor, tUnit);
};

btnConvert.addEventListener("click", () => {
  if (fUnit.value == tUnit.value) return alert("Seleccione unidades diferentes");
  if (valor.value == "" || isNaN(valor.value)) return alert("Ingrese una cantidad");

  if (fUnit.value && tUnit.value && valor.value) {
    btnConvert.enable;
  }

  const result = convertirUnidad(+valor.value, fUnit.value, tUnit.value);
  console.log(result);

  resultado.innerText = result.toFixed(2);
});

function validarYHabilitar() {
  const camposValidos = valor.value !== "" && 
                       fUnit.value !== "" && 
                       tUnit.value !== "" &&
                       !isNaN(valor.value);
  
  btnConvert.disabled = !camposValidos;
}

valor.addEventListener("input", validarYHabilitar);
fUnit.addEventListener("change", validarYHabilitar);
tUnit.addEventListener("change", validarYHabilitar);


