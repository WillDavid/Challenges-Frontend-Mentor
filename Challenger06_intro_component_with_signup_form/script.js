const form = document.querySelector('form')


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    for(let i=0; i<form.length;i++){
        const item = form.elements[i];
        if(item.type !== "submit"){
            if(item.value === ""){
                console.log("Preenche tudo!")
            }
            else{
                
                console.log("Enviado com Sucesso")
            }

        }
        
        
    }
})