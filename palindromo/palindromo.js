let palavra = 'entrada';
//let palavra = document.getElementById('entrada');

function palindromo(palavra) {
    let palindromo = palavra;
    palindromo = palindromo.split('').reverse().join('');
    
    if (palavra == palindromo) {
        console.log(`A palavra ${palavra} é um palindromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}


palindromo(palavra);