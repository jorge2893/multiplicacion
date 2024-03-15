let numero = parseInt(prompt("Ingrese un numero entre 1 y 20")); //poner como comentario para verlo por console log

// const Obtfactymulti = (numero) => { // para verlo en console.log
    if (numero >= 1 && numero <= 20) {
        for (let index = 1; index <= numero; index++) {
            document.writeln(`${index} x ${numero} = ${index * numero}`); //cambiar document.writeIn a console log para ver por consola
        };
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            document.writeln(`Factorial de ${i} = ${factorial}`); //cambiar document.writeIn a console log para ver por consola
        };
        
    }else {
        document.writeln("Número fuera del rango"); //cambiar document.writeIn a console log para ver por consola
    }
// }; //quitar comentario


// const numero = 25;  // para verlo en console.log
// Obtfactymulti(numero); // para verlo en console.log
