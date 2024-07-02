/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

let mayor = 0;
const numero1 = parseFloat(prompt('Digite el primer numero: '))
const numero2 = parseFloat(prompt('Digite el segundo numero: '))
const numero3 = parseFloat(prompt('Digite el tercer numero: '))

if(numero1 >= numero2 && numero1 >= numero3){
    mayor = numero1;
}
    else if(numero2>=numero1 && numero2>=numero3){
        mayor = numero2;
    }
    else{
        mayor = numero3;
    }
    document.write(`El ${mayor} es el numero mas grande`);