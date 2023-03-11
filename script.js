function cliente(){
    alert ("Bienvenido a PIG BANK");
    let usuario = prompt ("Ingrese su nombre para continuar");
    while (usuario === ""){
        usuario = prompt("Ingrese su nombre para continuar");
    }
    return usuario
}
let usuario = cliente()


function contraseña(){
    let password = parseInt(prompt("Ingrese su contraseña"));
    while (password === ""){
        password = parseInt(prompt("Ingrese su contraseña para continuar"));
    }
    return password
}
let password = contraseña()


class account{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
const standard = new account ('standard', 5);
const smart = new account ('smart', 10);
const premium = new account ('premium', 20);


const arrayAccounts = [standard, smart, premium];
console.log (arrayAccounts);

const divAccounts = document.getElementById ("container")
arrayAccounts.forEach (account =>{
    const div = document.createElement ("div");
    div.innerHTML = `<p>Name: ${account.name} </p>
                     <p>Price: ${account.price} </p>
                     <button>Get this account</button>`
    divAccounts.appendChild(div);
});



function welcome (){
    let account = parseInt(prompt("¿Que tipo de cuenta le gustaria adquirir? \n 1) Cuenta Standard \n 2) Cuenta Smart \n 3) Cuenta Premium"));
    while (account <1 || account >3){
        account = parseInt(prompt("¿Que tipo de cuenta le gustaria adquirir? \n 1) Cuenta Standard \n 2) Cuenta Smart \n 3) Cuenta Premium"));
    }    
    monstrarDetalles (account);
}

function monstrarDetalles(account){
    if (account === 1){
        alert ("Usted selecciono cuenta Standard");
        console.log(account)
        console.log('ustede debe abonar ' + account.price);
    } else if (account === 2){
        alert ("Usted selecciono cuenta Smart");
        console.log(account)
        console.log('Usted debe abonar ' + account.price);
    } else if (account === 3){
        alert ("Usted selecciono cuenta Premium");
        console.log(account)
        console.log('Ustede debe abonar ' + account.price);
    }
}

welcome();












