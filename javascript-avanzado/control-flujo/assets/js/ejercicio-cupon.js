// Escribir un programa que detecte el cupón que tiene el usuario

// Bronce se le hará un descuento del 5 %
// Plata se le hará un descuento del 10%
// Oro se le hará un descuento del 20%
// Platino se le hará el descuento del 25%

// -El usuario introduce el precio primero y después el cupón
// -El programa debe mostrar el precio original y el precio con el descuento aplicado
// -También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
//  cupón equivocado
 
 var getCupon = () => {
    if(isNaN(document.getElementById("precio").value)){
        document.getElementById("respuesta").innerHTML = `Precio no válido`;   
    }else{
        let precio = parseInt(document.getElementById("precio").value);
        let cupon = document.getElementById("cupon");
        switch (cupon.value) {
            case "Bronce":
                total = precio * 0.95;
                document.getElementById("respuesta").innerHTML = `El precio con descuento es: $${total}`;
                break;
            case "Plata":
                total = precio * 0.90;
                document.getElementById("respuesta").innerHTML = `El precio con descuento es: $${total}`;
                break;
            case "Oro":
                total = precio * 0.80;
                document.getElementById("respuesta").innerHTML = `El precio con descuento es: $${total}`;
                break;
            case "Platino":
                total = precio * 0.75;
                document.getElementById("respuesta").innerHTML = `El precio con descuento es: $${total}`;
                break;
            default:
                document.getElementById("respuesta").innerHTML = `Cupón no válido`;
                break;
            }
        }
    }
    
    let total;
    