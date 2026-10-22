const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
const inputNumero = document.getElementById("numero");

function imprimirFizzBuzz() 
{
    const limite = parseInt(inputNumero.value);
   
    if (isNaN(limite) || limite <= 0) 
    {
      resultado.textContent = "Ingresa un numero mayor a 0.";
      resultado.style.color = "red";

      console.error("No puede estar vacio!");
      return;
    }

    resultado.textContent = "";

    for (let i = 1; i <= limite; i++) 
    {
      if (i % 3 === 0 && i % 5 === 0) 
      {
        resultado.textContent += "FizzBuzz";
        console.log("FizzBuzz");
      } 
      else if (i % 3 === 0) 
      {
        resultado.textContent += "Fizz";
        console.log("Fizz");
      } 
      else if (i % 5 === 0) 
      {
        resultado.textContent += "Buzz";
        console.log("Buzz");
      } 
      else 
      {
        resultado.textContent += i;
        console.log(i);
      }

      if(i != limite)
      {
        resultado.textContent += "  -  ";
      }
    }
}

boton.addEventListener("click", imprimirFizzBuzz);