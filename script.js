let rowNumberSection = document.querySelector(".row-number-section");
for(let i=1;i<=100;i++){
   let div = document.createElement("div");
   div.innerText=i; 
   div.classList.add("row-number")
   rowNumberSection.append(div)

}

let columnTagSection = document.querySelector(".column-tag-section")
for(let i=0;i<26;i++){
    let asciiCode = 65+i;
    let reqAlphabet=String.fromCharCode(asciiCode);
    let div = document.createElement("div");
    div.innerText=reqAlphabet;
    div.classList.add("column-tag")
    columnTagSection.append(div);
}
let cellTag =  document.querySelector(".cell-section")
for(let i=1;i<=100;i++){
let rowDiv=document.createElement("div");
rowDiv.classList.add("row")
for(let j=0;j<26;j++){
let asciiCode=65+j;
let reqAlphabet=String.fromCharCode(asciiCode);
let cellAddresss = reqAlphabet+i;
let cellDiv = document.createElement("div");
cellDiv.classList.add("cell");
cellDiv.setAttribute("data-address",cellAddresss)
rowDiv.append(cellDiv);
}
cellTag.append(rowDiv);
}
