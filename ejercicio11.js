/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const numero = parseInt(prompt("Digite un numero: "))
let divisible=false;
let dos ="";
let tres ="";
let cinco ="";
let siete ="";
if(numero % 2 == 0)
    {
        divisible = true
        dos = " <2> ";
    }

if(numero % 3 == 0)
    {
        divisible = true
        tres = " <3> ";
    }

if(numero % 5 == 0)
    {
        divisible = true
        cinco = " <5> ";
    }
    
if(numero % 7 == 0)
    {
        divisible = true
        siete = " <7> "
    }
    
if(!divisible){
    document.write(`el ${numero} no es divisible por 2,3,5,7`);
}
else{
    document.write(`el ${numero} es divisible por los siguientes numeros:` + dos + tres + cinco + siete);
}