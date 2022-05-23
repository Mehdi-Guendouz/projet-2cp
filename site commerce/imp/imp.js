/*const imprimerContainer = document.querySelector(".body_container")
const imprimerBtn = document.querySelector(".imprimer")

imprimerBtn.addEventListener("click",()=>{
    newwindow = window.open("")
    newwindow.document.write(imprimerContainer.outerHTML)
    newwindow.print()
    newwindow.close()
})

console.log(imprimerContainer)*/



const printEttiquet = document.querySelector(".body_container")
console.log(printEttiquet)



function printettquet(){
    html2pdf().from(printEttiquet).save()
    console.log(printEttiquet)
  }