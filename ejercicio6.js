/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

const numero1 = parseFloat(prompt('Digite el primer numero: '))
const numero2 = parseFloat(prompt('Digite el segundo numero: '))

if(numero1 > numero2){
    document.write(`el numero mayor es: ${numero1}`);
}
if(numero2 > numero1){
    document.write(`el numero mayor es: ${numero2}`);
}
if(numero1 == numero2){
    document.write('los dos numeros proporcionados son iguales');
}