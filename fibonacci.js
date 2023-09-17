/** 
 * 1. Crear una funcion para recibir un numero entero 'n'
 * 2. Definir el caso base donde el numero sea menor a 3 se retorna el valor de 1
 * 3. Definir el caso contrario donde se retorna el valor de la función de n-2 + la función de n-1
 * 
 * fibonacci(n)
 * // input: n where n E Z
 * // output: the value of the position in fibonacci's series
 * base case
 * IF n < 3 then:
 *   RETURN 1
 * ELSE 
 *  RETURN fibonacci(n-2) + fibonacci (n-1)
 */
function fibonacci(n){
    if (n<3) { //base case
        return 1;
    }

    return fibonacci(n-2) + fibonacci (n-1);
}

console.log(fibonacci(10));
