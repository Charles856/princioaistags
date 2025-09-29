const button = document.getElementById("messi")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")
const lagadouro = document.getElementById("lagadouro")
const bairro = document.getElementById("bairro")
const inputCep = document.getElementById("cep")
const complemento = document.getElementById("complemento")

async function buscarEndereco(cp) {

    const objetocep = await fetch(`https://viacep.com.br/ws/${cp}/json`);
    console.log(objetocep)
    const data = await objetocep.json();
    console.log(data)

    cidade.value = data.localidade
    estado.value = data.estado
    lagadouro.value = data.logradouro
    bairro.value = data.bairro
}


inputCep.addEventListener("change", function (evento) {
    evento.preventDefault()
    buscarEndereco(inputCep.value)
}
)