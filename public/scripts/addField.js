//Procurar o elemento (button)
document.querySelector("#add-time")
.addEventListener("click", cloneField);
//quando clicar no botao

//executar uma acao
function cloneField() {
    console.log('Foi!');
    //duplicar os campos
    //qual campo?

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    
    //limpar os campos - quais?

    const fields = newFieldContainer.querySelectorAll("input");
    
   //para cada campo limpar

   fields.forEach(function(field){
       field.value = "";
   });

    //colocar na pagina - onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);

}
