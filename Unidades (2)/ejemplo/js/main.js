function otraPagina() {
    location.href="index2.html"
    var PasswordSistema = '1234';
    var MensajeError = 'Contraseña erronea';
    
    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;

     // alert(mensaje + password);

    if(password == PasswordSistema){
       // alert ("contraseña correcta: ingresaste");
       document.getElementById("error").innerHTML = " ";
       var mensajeEncriptado = btoa(mensaje);
    } else{
        //alert(MensajeError);
        document.getElementById("error").innerHTML = MensajeError;
      //   document.getElementById("error").className = "alerta"
    }
}   {
        //alert(MensajeError);
        document.getElementById("error").innerHTML = MensajeError;
      //   document.getElementById("error").className = "alerta"
    }