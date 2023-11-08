const botao = document.querySelector("button");

botao.addEventListener("click", ()=>{
    let nomeInput = document.querySelector("input");
    const nome = document.querySelector("#nome");
    if(nomeInput.value == ""){
        nome.innerHTML = `Bem-vindo, esse é o site sobre mim`;
    }else{
        nome.innerHTML = `Bem-vindo ${nomeInput.value}, esse é o site sobre mim`;
    }
    
    
})