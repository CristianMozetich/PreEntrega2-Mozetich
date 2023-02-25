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