function maiuscula(texto){
  texto.value = texto.value.toUpperCase();
}

function valida(){
  if(password.value == ""){
    alert("A senha precisa ser informada!")
    document.container.main.login.password.focus();
    return false;
  }
}