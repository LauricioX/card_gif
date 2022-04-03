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
})


const banco = [
    {url:"https://i.gifer.com/KTm7.gif", nome:"maria clara"},
    {url:"https://i.gifer.com/KTm7.gif", nome:"jordanio"},
    {url:"https://i.gifer.com/KTm7.gif", nome:"pedro joao"}
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


const insertBanco = () => {
    banco.forEach(dado => insertItemsDom(dado.url,dado.nome))
}


insertBanco()