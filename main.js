let nombreDeCuenta = prompt("ingrese el nombre de usuario");
if (nombreDeCuenta == "cristian"){
    alert("bienvenido cristian");
} else{
    alert("nombre de usuario incorrecto");
}
console.log(nombreDeCuenta);

let contraseñaDeCuenta = parseFloat(prompt("ingrese su contraseña"));
const passAutorizado = 1234;

for(let i=0; i=5; i++){
    if (contraseñaDeCuenta == passAutorizado){
        alert("contraseña correcta");
        break
    } else {
       contraseñaDeCuenta = parseFloat(prompt("contraseña incorrecta, vuelva a ingresarla"));
    }
}

let palabraDeSeguridad = prompt("ingrese su palabra de seguridad");
while(palabraDeSeguridad != "cuenta"){
    palabraDeSeguridad = prompt("palabra de seguridad incorrecta, ingrese palabra de seguridad");
    console.log (palabraDeSeguridad)
}

let tipoDeCuenta = prompt("igrese el tipo de cuenta que desea operar, plazo fijo, caja de ahorro o cuenta corriente");
switch (tipoDeCuenta){
    case "plazo fijo":
        console.log("bienvenido a su plazo fijo");
    break

    case "caja de ahorro":
        console.log("bienvenido a su caja de ahorro");
        break

    case "cuenta corriente":
        console.log("bienvenido a su cuenta corriente");
        break
}

let deposito = parseFloat(prompt("¿cuanto dinero le gustaria ingresar en su cuenta? la cantidad mínima es 10 y se admite hasta 500"));
if (deposito >10 && deposito <=500){
    alert ("la suma ingresada es admisible");
} else if (deposito <10 || deposito >500){
    alert ("no se admite esa cantidad de dinero");
}

const mantenimientoDeCuenta = 10;
let dineroTotal = (deposito - mantenimientoDeCuenta);
console.log("el dinero total de su cuenta es de " + dineroTotal);


