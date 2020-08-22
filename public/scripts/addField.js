//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
  
  //Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
  //Pegar os campos: quais campos?
  const fields = newFieldContainer.querySelectorAll('input') //procura na var newFieldContainer os itens que estiverem como 'input'
  
  //Para cada campo, limpar
  fields.forEach((field) => { //arrow function
    //Pega o field do momento e limpa
    field.value = ""
  })

  //Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}