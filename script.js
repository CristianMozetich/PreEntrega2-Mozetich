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


class plan{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
const standard = new plan ('standard', 5);
const smart = new plan ('smart', 10);
const premium = new plan ('premium', 20);


const arrayPlan = [standard, smart, premium];
console.log (arrayPlan);


const divPlan = document.getElementById ("container")
arrayPlan.forEach (plan =>{
    const div = document.createElement ("div");
    div.innerHTML = `<p>Name: ${plan.name} </p>
                     <p>Price: ${plan.price} </p>
                     <button>Get this account</button>`
    divPlan.appendChild(div);
});

divPlan.className = "tarjetas";

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


const sumarTarjetaDebito = arrayPlan.map ((plan =>{
    return{
        name: plan.name,
        price: (plan.price + 3),
    }
}))

function tarjeta (){
    let debitCard = prompt ("¿Would you like to get a debit card? \n yes \n no");
    if (debitCard === "yes"){
        console.log (sumarTarjetaDebito);
    }
}
tarjeta();












