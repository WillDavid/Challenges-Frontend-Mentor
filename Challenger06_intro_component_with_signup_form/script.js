

function validarEmail(){
    const email = document.getElementById('email');
    
    if(!email.checkValidity()){
        console.log("oi")
    }else{
        console.log("Teste")
    }
}

const buttonSubmit = document.getElementById('buttonSubmit')


buttonSubmit.onclick =  function(e){
    
}

