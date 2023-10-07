// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*function validaCampo()
{
    var campoUsuario = document.getElementById('submit'); 

    if(campoUsuario.value.length <1)
    {
        alert("Verifique se todos os campos estão preenchidos.");
        return false;
    }
    else
    {
       return true;
    }
}
onblur="validaCampo()"*/

function validar(){
   var Titulo = form.Titulo.value;
   var Autor = form.Autor.value;
   var Ano = form.Ano.value;

   if(Titulo == ""){
    alert('Preencha o campo Titulo!');
    form.Titulo.focus();
    return false
   }

   if(Autor == ""){
    alert('Preencha o campo Autor!');
    form.Autor.focus();
    return false
   }

   if(Ano == ""){
    alert('Preencha o campo Ano!');
    form.Ano.focus();
    return false
   }
}

function validarCampo(){
    var Nome = form2.Nome.value;
    var Telefone = form2.Telefone.value;
    
    if(Nome == ""){
        alert('Preencha o campo Nome!');
        form2.Nome.focus();
        return false
    }

    if(Telefone == ""){
        alert('Preencha o campo Telefone!');
        form2.Telefone.focus();
        return false
    }
}