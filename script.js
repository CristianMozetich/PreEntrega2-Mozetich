function usuario(){
    let nombreDeUsuario = prompt("Enter username");
    for (let i=0; i=5; i++){
        if (nombreDeUsuario == "cristian"){
            alert ("Welcome " + nombreDeUsuario);
            console.log(nombreDeUsuario);
            break;
        } else {
            nombreDeUsuario = prompt("Wrong username, please try again");
        }
    }
}

usuario();

function password(){
    let contraseña = parseFloat(prompt("Enter your password"));
    for (let i=0; i=5; i++){
        if (contraseña === parseFloat(1234)){
            alert ("Welcome to Pig Bank");
            console.log(contraseña);
            break;
        } else{
            contraseña = parseFloat(prompt("Wrong password, try again"));
        }
    }  
}

password();


    let money = parseFloat(prompt("¿How much money would you like to enter?"));
    if(money >20 && money <=500){
        alert("The money entered is correctly");
        console.log("correct amount");
    } else if(money <20 || money >500){
        alert("That amount of money is not allowed, enter amount greater than 20 and less than 500")
    }
    console.log(money); 



function costo(deposito, mantenimientoDeCuenta, interes){
    let total = (deposito - mantenimientoDeCuenta)*interes;
    console.log(total)
}
let num1 = money;
let num2 = parseFloat(20);
let num3 = parseFloat(1.5);
costo(num1, num2, num3);