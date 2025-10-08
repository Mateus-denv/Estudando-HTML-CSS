var login = document.getElementById(" idlogin");
var senha = document.getElementById("idpassword");
var confirmarsenha = document.getElementById("idconfirme");


function ValidarCadastro(){
    if(login.value == ""){
        alert("Preencha a senha");
        login.focus();
        return false;
    }
    if (senha.value == ""){
        alert('Preencha o senha');
        senha.focus();
        return false;
    }
    
    if (confirmarsenha.value == ""){
        alert("Preencha a confirmação");
        confirmarsenha.focus();
        return false;
    }

}