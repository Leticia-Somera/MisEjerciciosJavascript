const actual = 2022;


function calcularEdad() {  
    let nacimiento = parseInt(document.getElementById("nacimiento").value);
    console.log(nacimiento);
    let edad = actual - nacimiento;
    let resultado = document.getElementById("resultado");
    resultado.textContent = edad;           
}