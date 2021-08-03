let rowNumberSection = document.querySelector(".row-number-section");
let scd =  document.querySelector(".selected-cell-div");
let cellTag =  document.querySelector(".cell-section")
let columnTagSection = document.querySelector(".column-tag-section");
let lastcell;

cellTag.addEventListener("scroll" , function(e){
    rowNumberSection.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`;
     columnTagSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
});
for(let i=1;i<=100;i++){
   let div = document.createElement("div");
   div.innerText=i; 
   div.classList.add("row-number")
   rowNumberSection.append(div)

}
for(let i=0;i<26;i++){
    let asciiCode = 65+i;
    let reqAlphabet=String.fromCharCode(asciiCode);
    let div = document.createElement("div");
    div.innerText=reqAlphabet;
    div.classList.add("column-tag")
    columnTagSection.append(div);
}
for(let i=1;i<=100;i++){
let rowDiv=document.createElement("div");
rowDiv.classList.add("row")
for(let j=0;j<26;j++){
let asciiCode=65+j;
let reqAlphabet=String.fromCharCode(asciiCode);
let cellAddresss = reqAlphabet+i;
let cellDiv = document.createElement("div");
cellDiv.contentEditable=true
cellDiv.classList.add("cell");


cellDiv.setAttribute("data-address",cellAddresss)
cellDiv.addEventListener("click",function(e){
    if(lastcell){
        lastcell.classList.remove("cell-selected")
    }
    e.currentTarget.classList.add("cell-selected")
    lastcell=e.currentTarget
    let currcell = e.currentTarget.getAttribute("data-address")
    scd.innerText=currcell;
});
rowDiv.append(cellDiv);
}
cellTag.append(rowDiv);
}
