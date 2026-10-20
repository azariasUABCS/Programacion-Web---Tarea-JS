
const boton = document.getElementById("calcularBoton");
const resultado = document.getElementById("resultado");
const clasificacion = document.getElementById("clasificacion");

const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");


function calcularIMC() 
{
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if(peso > 0 && altura > 0) 
  {
    const imc = peso / (altura * altura);

    resultado.style.color = "black";
    resultado.textContent = "Tu IMC es: " + imc.toFixed(2);
    
    console.log("Peso:", peso, "kg");
    console.log("Altura:", altura, "m");
    console.log("IMC:", imc.toFixed(2));
    classificarIMC(imc);
  }
  else
  {
    resultado.textContent = "Por favor ingrese valores validos para peso y altura."; resultado.style.color = "red";
    console.error("No puede estar vacio!");
  }
}

function classificarIMC(imc)
{
    if(imc < 18.5) {clasificacion.textContent = "Bajo peso"; clasificacion.style.color = "blue";}
    else if(imc >= 18.5 && imc < 24.9) {clasificacion.textContent = "Normal"; clasificacion.style.color = "green";}
    else if(imc >= 25 && imc < 29.9) {clasificacion.textContent = "Sobrepeso"; clasificacion.style.color = "orange";}
    else {clasificacion.textContent = "Obesidad"; clasificacion.style.color = "red";}

    
    console.log("Categoria:", clasificacion.textContent);
    console.log("Tu IMC es: " + imc.toFixed(2));
}

boton.addEventListener("click", calcularIMC);