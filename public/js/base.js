const nome = "Marcelo Ellz";
let nome2 = "";
let pessoa = {
    nome: "Marcelo Eltz",
    Idade: "33",
    trabalho: "programador"
}

function alterarNome() {
    nome2 = "Maria SIlva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebaEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado receba um novo nome:");
    console.log(nome2);
}


console.log(pessoa);
console.log("Nome:");
console.log(pessoa.nome);


//recebaEalteraNome ("Nome Silva Pereira");
//recebaEalteraNome ("Maria Silva");
