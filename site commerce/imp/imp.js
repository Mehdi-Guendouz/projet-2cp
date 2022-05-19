const imprimerContainer = document.querySelector(".body_container")
const imprimerBtn = document.querySelector(".imprimer")

imprimerBtn.addEventListener("click",()=>{
    newwindow = window.open("")
    newwindow.document.write(imprimerContainer.outerHTML)
    newwindow.print()
    newwindow.close()
})

console.log(imprimerContainer)
