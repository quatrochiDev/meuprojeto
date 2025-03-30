// Contador simples em JavaScript
let contador = 0;

// Função para incrementar o contador
function incrementar() {
    contador++;
    console.log(`Contador: ${contador}`);
}

// Função para decrementar o contador
function decrementar() {
    if (contador > 0) {
        contador--;
    } else {
        console.log("O contador já está em 0!");
    }
    console.log(`Contador: ${contador}`);
}

// Função para resetar o contador
function resetar() {
    contador = 0;
    console.log("Contador resetado!");
}

// 🔹 Nova função para mostrar o valor atual do contador
function mostrarContador() {
    console.log(`Valor atual do contador: ${contador}`);
}

// Testando as funções
incrementar();
incrementar();
decrementar();
mostrarContador(); // Nova função adicionada
resetar();
