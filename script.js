// MUDAR COR DE DIV COM INPUT

function changeColor() {
    const selectColor = document.getElementById("selectColor").value;
    document.getElementById("quadrado").style.backgroundColor = selectColor;
}

// BOTAO QUE DA ALERT MOSTRANDO OS ATRIBUTOS DA CLASSE PESSOA
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa('NomeTeste', 1);

const botaoAlert = document.getElementById("botaoAlert");
botaoAlert.addEventListener("click", function(){
    alert("Nome: "+pessoa1.nome+"\nIdade: "+pessoa1.idade);
});


// CADA CLICK NO BOTAO MUDARA A COR DA DIV PARA CADA COR NA LISTA
const cores = ["red", "green", "blue", "yellow"];
let cor = 0
//for (cor in cores){}
function changeColorDiv(){
    const novaCor = document.getElementById("cor");
    novaCor.style.backgroundColor = cores[cor];   
    cor = (cor + 1) % cores.length;
}


// FORM E DADOS MOSTRADOS NO HTML
function changeDOM(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    document.getElementById("pForm").innerHTML = "Nome: "+nome+"<br>Email: "+email;
}