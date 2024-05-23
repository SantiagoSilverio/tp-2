function calcularPuntaje() {
    let array = document.getElementById('array-input').value.split(',').map(Number);
    let puntaje = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 5) {
            puntaje += 5;
        } else if(array[i] % 2 === 0) {
            puntaje += 1;
        } else {
            puntaje += 3;
        }
    }
    document.getElementById('resultado').innerText = 'El puntaje es: ' + puntaje;
}

function verificarNumeros() {
    let numero1 = 5;
    let numero2 = 8;
    let resultado = '';
    if(numero1 <= numero2) {
        resultado += "numero1 no es mayor que numero2\n";
    }
    if(numero2 > 0) {
        resultado += "numero2 es positivo\n";
    }
    if(numero1 != 0) {
        resultado += "numero1 es negativo o distinto de cero\n";
    }
    if(numero1 + 1 < numero2) {
        resultado += "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2";
    }
    document.getElementById('resultado2').innerText = resultado;
}

function verificarDNI() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni = document.getElementById('dni-input').value;
    let letra = document.getElementById('letra-input').value;
    if(dni < 0 || dni > 99999999) {
        document.getElementById('resultado3').innerText = "El número proporcionado no es válido";
    } else {
        let letraCalculada = letras[dni % 23];
        if(letraCalculada != letra.toUpperCase()) {
            document.getElementById('resultado3').innerText = "La letra o el número proporcionados no son correctos";
        } else {
            document.getElementById('resultado3').innerText = "El número de DNI y la letra son correctos";
        }
    }
}

function calcularFactorial() {
    let n = document.getElementById('numero-input').value;
    let resultado = 1;
    for(let i = n; i > 0; i--) {
        resultado *= i;
    }
    document.getElementById('resultado4').innerText = 'El factorial de ' + n + ' es: ' + resultado;
}

function verificarPalindromo() {
    let cadena = document.getElementById('cadena-input').value;
    let cadenaSinEspacios = cadena.replace(/ /g, "").toLowerCase();
    let cadenaReversa = cadenaSinEspacios.split("").reverse().join("");
    if(cadenaSinEspacios === cadenaReversa) {
        document.getElementById('resultado5').innerText = 'La cadena de texto es un palíndromo';
    } else {
        document.getElementById('resultado5').innerText = 'La cadena de texto no es un palíndromo';
    }
}

function lanzarDados() {
    let resultados = new Array(13).fill(0);
    for(let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        resultados[dado1 + dado2]++;
    }
    let maximo = Math.max(...resultados);
    document.getElementById('resultado6').innerText = 'El valor que más veces se repitió es: ' + resultados.indexOf(maximo);
}
