let btnmodal = document.querySelector("#btn__modal");
let modal = document.querySelector("#add__modal");
let containerCards = document.querySelector("#container__cards");

// exemplo de dado que sera inserido no dom 


{/* <div class="col-md-3 card text-center py-1 shadow mx-1">
<img src="https://i.gifer.com/AIO6.gif" alt="">
<p class="text-muted">por: <span class="text-primary">Lauricio de souza</span></p>
<div class="nav d-flex border align-items-center justify-content-center">
    <button class="btn-primary m-1"><img src="assets/icons/share.svg" alt=""></button>
    <button class="btn-primary m-1"><img src="assets/icons/balloon-heart.svg" alt=""></button>
</div>
</div> */}


btnmodal.addEventListener("click", function(){
    modal.classList.toggle("show")
    btnmodal.style.backgroundColor = btnmodal.style.backgroundColor !== "red" ? "red" : "#007bff"
})


const banco = [
    {url: 'https://orig00.deviantart.net/62ff/f/2015/313/a/0/training_by_kirokaze-d9g32f4.gif', nome: 'testeq1'},
    {url: 'https://c.tenor.com/4q1CxYO25e0AAAAC/pixel-art.gif', nome: 'cleber'},
    {url: 'https://media1.giphy.com/media/5e25aUTZPcI94uMZgv/giphy.gif', nome: 'lauriciio'}
   
]

const insertItemsDom = (url,nome) =>{
    let newCardGif = document.createElement("div");
    newCardGif.classList.add("col-md-3")
    newCardGif.classList.add("card")
    newCardGif.classList.add("text-center")
    newCardGif.classList.add("py-1")
    newCardGif.classList.add("shadow")
    newCardGif.classList.add("mx-1")
    newCardGif.innerHTML = `
    <img src="${url}" alt="">
    <p class="text-muted">por: <span class="text-primary">${nome}</span></p>
        <div class="nav d-flex border align-items-center justify-content-center">
            <button class="btn-primary m-1"><img src="assets/icons/share.svg" alt=""></button>
            <button class="btn-primary m-1"><img src="assets/icons/balloon-heart.svg" alt=""></button>
        </div>
    ` 
    containerCards.prepend(newCardGif)
}


const getDataDom = () => {
    let urlInput = document.querySelector("#input__url").value
    let nomeInput = document.querySelector("#input__nome").value
    isertInData(urlInput,nomeInput)
    insertBanco()
    modal.classList.toggle("show")
   

}


const isertInData = (url,nome) =>{
    if(url.trim() !== "" || nome.trim() !== ""){
          banco.push({url:url, nome:nome})
        document.querySelector("#input__url").value = ""
        document.querySelector("#input__nome").value = ""
    }else{
        alert("preencha todos os campos !!!")
    }
}

const clearBanco = () =>{
    let containerCards = document.querySelector("#container__cards");
    while(containerCards.firstChild){
        containerCards.removeChild(containerCards.lastChild);
    }


}


const insertBanco = () => {
    clearBanco()
    banco.forEach(dado => insertItemsDom(dado.url,dado.nome))
}

document.getElementById("input__btn").addEventListener("click", getDataDom)


insertBanco()