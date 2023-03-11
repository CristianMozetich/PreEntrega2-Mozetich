function cliente(){
    alert ("Welcome to PIG BANK");
    let usuario = prompt ("Please, type your name to continue");
    while (usuario === ""){
        usuario = prompt("Please, type your name to continue");
    }
    return usuario
}
let usuario = cliente()
console.log(usuario)


function cuentas (){
    let account = parseInt(prompt("¿What account would you like to get? \n 1)Standard Account \n 2)Smart Account \n 3)Premium Account"));
    while (account <1 || account >3){
        account = parseInt(prompt("¿What account would you like to get? \n 1)Standard Account \n 2)Smart Account \n 3)Premium Account"));
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
arrayAccounts.forEach (accounts =>{
    const div = document.createElement ("div");
    div.innerHTML = `<p>Name: ${accounts.name} </p>
                     <p>Price: ${accounts.price} </p>
                     <button>Get this account</button>`
    divAccounts.appendChild(div);
});



function monstrarDetalles(account){
    if (account === 1){
        alert ("Thank you, You selected Standard Account");
        console.log (standard);
    } else if (account === 2){
        alert ("Thank you, You selected Smart Account");
        console.log(smart);
    } else if (account === 3){
        alert ("Thank you, You selected Premium Account");
        console.log(premium);
    }
}
cuentas();













