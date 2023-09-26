// switch

//et opcao = 4;
//let opcao =parseInt(prompt("Digite uma opção"))
/*let opcao =+prompt("Digite uma opção")

switch(opcao){
    case 1:
        document.write("Primeira Opção")
        break;
    case 2:
        document.write("Segunda Opção")
        break;
    case 3: 
        document.write("Terceira opção")
        break;
    default :
        document.write("nehuma das opções validas")
        break;

}
*/

// incremento e decremento

let valor = 7
console.log(valor)
valor = valor+1
console.log(valor);

let valor1 = 10
console.log(valor1)
valor1 +=3;
console.log(valor1)

// for (laço de repetição)

for(let i=0; i<10; i++){
    console.log("Agora i vale" +i);
}

//for com array
let carros=["Fusca","Belina","Marea Turbo","Kombi","Gurgel","Passati"]

for(let i=0; i<carros.length;i++){
    console.log(carros[i])
}

//for com of


for(let carro of carros){
    console.log(carro)
}

/*while

let cont =0
while(cont <20){
    alert("Passagem de numeros" +cont)
    cont++
}*/

//do while

let valor2 =0
do{
    console.log("passagem" +valor2)
    valor2++
}while(valor2 <0)

//função

/*function teste(num1, num2){
    return num1 + num2
}
console.log(teste(4,6))

function avisar(){
    alert("avisar")
    alert("avisar-2")
}
avisar()*/
let novo = document.getElementById("idNome")

function mudar(){

document.getElementById("titulo").innerHTML =novo.value;
}

function trocar(cores){
    document.body.style.background =cores
}