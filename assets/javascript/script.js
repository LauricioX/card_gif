let btnmodal = document.querySelector("#btn__modal");
let modal = document.querySelector("#add__modal");
let containerCards = document.querySelector("#container__cards");



btnmodal.addEventListener("click", function(){
    modal.classList.toggle("show")
    btnmodal.style.backgroundColor = btnmodal.style.backgroundColor !== "red" ? "red" : "#007bff"
})

    
    
    const localstorageTransaction = JSON.parse(localStorage
        .getItem("datapic"))

 let transactions = localStorage
.getItem("datapic") !== null ? localstorageTransaction : [];





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
            <button class="btn-primary m-1"><img src="assets/icons/trash-fill.svg" alt=""></button>
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

let id = 0


const isertInData = (url,nome) =>{
    if(url.trim() !== "" || nome.trim() !== ""){
       
        id++
        transactions.push({id:id,url:url, nome:nome})
        document.querySelector("#input__url").value = ""
        document.querySelector("#input__nome").value = ""
        updateLocalStorage()
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

const updateLocalStorage = () => {
    localStorage.setItem("datapic", JSON.stringify(transactions))
}


const insertBanco = () => {
    clearBanco()
    transactions.forEach(dado => insertItemsDom(dado.url,dado.nome))
}

document.getElementById("input__btn").addEventListener("click", getDataDom)

updateLocalStorage()
insertBanco()