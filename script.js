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