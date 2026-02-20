import "./style/index.css";
import "@fortawesome/fontawesome-free/js/all.js";
const dropArea = document.getElementById("drop-area") ;
const inputFile = document.getElementById("facility-img") ;
const imgView = document.getElementById("img-view") ;

inputFile.addEventListener("change" , uploadImage) ;

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]) ;
    imgView.style.backgroundImage = ` url(${imgLink})` ;
    imgView.textContent = "" ;
}

dropArea.addEventListener("dragover" , function (e) {
    e.preventDefault() ;
    imgView.style.backgroundColor=" rgb(24 90 188 /.3) " ;
    dropArea.previousElementSibling.style.color= "#197FE6"
})

dropArea.addEventListener("dragleave" , function () {
    imgView.style.backgroundColor = "white";
    dropArea.previousElementSibling.style.color= " #64748B " ;
}) ;

dropArea.addEventListener("drop", function (e) {
    e.preventDefault() ;
    inputFile.files = e.dataTransfer.files ;
    uploadImage() ;
})
const inputs = [...document.querySelectorAll('input')]; // The [...] converts it to an Array
if(document.querySelector("select")){
inputs.push(document.querySelector("select")) ;
}
if(document.querySelector("textarea")) {
    inputs.push(document.querySelector("textarea")) ;
}


console.log(inputs) ;
inputs.forEach(function(input) {
    input.addEventListener("focus", function(event) {
        document.querySelector(`[for="${event.target.id}"]`).style.color = "#197FE6"  ;
    });
    input.addEventListener("blur", function(event) {
        document.querySelector(`[for="${event.target.id}"]`).style.color = " #64748B " ;
    });
    
});
