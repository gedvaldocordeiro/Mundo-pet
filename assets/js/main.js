// FUNÇÃO ABRIR E FECHAR

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('lateral')
    })
}

// VERIFICAÇÃO DO FORMULARIO

const validForm = function(event){

    var inputName = document.querySelector("#name")
    var inputPhone = document.querySelector("#phone")
    var inputEmail = document.querySelector("#email")
    var inputMessage = document.querySelector("#message")

    // SE
    if(inputName.value == ""){
        alert("Preencha seu nome");
        inputName.focus();
        return false;
    }

    if(inputPhone.value == ""){
        alert("Preencha seu telefone");
        inputPhone.focus();
        return false;
    }

    if(inputEmail.value == ""){
        alert("Preencha seu e-mail");
        inputEmail.focus();
        return false;
    }

    if(inputMessage.value == ""){
        alert("Digite uma menssagem");
        inputMessage.focus();
        return false;
    }

    alert("Mensagem enviada")
}

// DEIXAR O CABEÇALHO FIXO

const header = document.querySelector('#header')

window.addEventListener('scroll', function(){
    let getScrollPosition = window.scrollY;

    if(getScrollPosition > 10){
        header.style.position = 'fixed';
        header.style.background = '#FFF';
        header.style.boderBottom = '1px solid rgb(248,248,248)'
    }
    else{
        header.style.position = 'relative';
        header.style.background = 'transparent';
        header.style.boder = '0'
    }
})