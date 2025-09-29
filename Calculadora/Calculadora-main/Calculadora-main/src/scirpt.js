function CalcularIdade(){
    const anoAtual = new Date().getFullYear();
    const anoNascimento = document.getElementById("ano-nascimento");
    const resposta = document.getElementById("resposta")
    resposta.textContent =anoAtual - Number(anoNascimento.value);
}