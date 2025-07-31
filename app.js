//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = []

// Função de adicionar amigo
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim()
    if (amigo === "") {
        alert("Por favor, insira um nome.")
        return
    }
    amigos.push(amigo) 
    document.getElementById("amigo").value = ""
    atualizarListaAmigos()
}

// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li")
        item.textContent = amigos[i]
        lista.appendChild(item)
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.")
        return
    }
    let indiceDoAmigoSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceDoAmigoSorteado];
    document.getElementById("resultado").innerHTML = amigoSorteado + " é o amigo secreto!";
    document.getElementById("listaAmigos").innerHTML = "";
}

// Funções Adicionais:
// Funçao da tecla Enter
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});