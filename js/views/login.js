'use strict'
//Atalhos para os elementos DOM  - Document Object Model
const formLogin = document.getElementById('formLogin')
const botaoGoogle = document.getElementById('loginGoogle')


//Adicionamos um listener em cada item
formLogin.addEventListener('submit', (event) => {
    event.preventDefault() //evita recarregar a página   
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    loginFirebase(email, senha) 
})

//listener botão Google
botaoGoogle.addEventListener('click', (event) => {
    event.preventDefault() //Não recarrega a página
    loginGoogle()
})












function login(email, senha){
    //alert(`O email é ${email} e a senha é ${senha}`)
    if(email==='ze@uol.com.br' && senha==='123456'){
        window.location.href = '/menu.html'
    } else {
        alerta('Credenciais inválidas!','danger')
    }
}