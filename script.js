function cliente(){
    alert ("Welcome to PIG BANK");
    let usuario = prompt ("Ingrese su nombre para continuar");
    while (usuario === ""){
        usuario = prompt("Ingrese su nombre para continuar");
    }
    return usuario
}
let usuario = cliente()
console.log(usuario)


function cuentas (){
    let account = parseInt(prompt("¿Que tipo de cuenta le gustaria adquirir? \n 1) Cuenta Standard \n 2) Cuenta Smart \n 3) Cuenta Premium"));
    while (account <1 || account >3){
        account = parseInt(prompt("¿Que tipo de cuenta le gustaria adquirir? \n 1) Cuenta Standard \n 2) Cuenta Smart \n 3) Cuenta Premium"));
    }    
    monstrarDetalles (account);
}


class accounts{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
const standard = new accounts ('standard', 5);
const smart = new accounts ('smart', 10);
const premium = new accounts ('premium', 20);


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



function monstrarDetalles(account){
    if (account === 1){
        alert ("Usted selecciono cuenta Standard");
        console.log (standard);
    } else if (account === 2){
        alert ("Usted selecciono cuenta Smart");
        console.log(smart);
    } else if (account === 3){
        alert ("Usted selecciono cuenta Premium");
        console.log(premium);
    }
}
cuentas();













