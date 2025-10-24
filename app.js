const btn = document.querySelector("#btn");
const space = document.querySelector("#space");
const amount = document.querySelector("#amount");
let counter = 0;

btn.addEventListener("click", ()=>{
    const selected = parseInt(amount.value); //define o valor desta variavel como o numero selecionado pelo usuario no menu
    console.log(selected);

    if(isNaN(selected)){
        alert("Please select a number !")
    }

    space.innerHTML=""; //limpa as cores geradas com todos os clicks

    for(let i = 0; i < selected; i++){ //gera as divs e as cores com base na opção selecionada pelo usuario no menu
        counter++;
        let red = Math.floor(Math.random()*256);
        let grn = Math.floor(Math.random()*256);
        let blu = Math.floor(Math.random()*256);

        let randomCol = `rgb(${red}, ${grn}, ${blu})`;

        let bright = red*0.2126 + grn*0.7152 + blu*0.0722

        console.log("Clicked !")
        console.log(randomCol);
        console.log(counter);
        console.log(bright);

        const divCr1 = document.createElement("div");
        const divText = document.createElement("p");
        let divTxtCont = document.createTextNode(randomCol);

        if(bright < 128){
            divText.style.color = "white";
        }
        else{
            divText.style.color = "black";
        }

        //define a classe para as divs geradas pelo codigo e define seus ids respectivos com base no contador
        divCr1.className = "colDivClass"
        divCr1.id=`colDiv${counter}`;

        divCr1.style.backgroundColor = randomCol;

        divText.appendChild(divTxtCont);
        divCr1.appendChild(divText);
        space.appendChild(divCr1);
    }
});