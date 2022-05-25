const selector = document.querySelectorAll(".hidden_ele")
const a_hover = document.querySelectorAll(".a_hover")
const notifContent = document.querySelector(".ajouter_notif")
const navContainer = document.querySelector(".nav_menu_container")
const toggleBtn = document.getElementById("toggle")
const closeBtn = document.querySelector(".close")
const closesideClick = document.querySelector(".closeSidebare")
const tableColisPretexp = document.querySelectorAll(".table_element")
const printAllEttiquet = document.getElementById("print_all")
const printOneEttiquet = document.querySelectorAll(".print_one_element")
const printBtnOne = document.querySelectorAll(".impBtn_one")
const profilCnt = document.querySelector('.btn_log')
const formProfil = document.querySelector(".form_change_username")
const popupcontainer = document.querySelectorAll(".confirm_contaner")
const deletBtn = document.querySelectorAll(".DeletBtn")
const closePopUp = document.querySelectorAll(".close_popup")
let notfNumber = 0;

/* pup up supprimer start*/

deletBtn.forEach(function(deletElement,i){
  deletElement.addEventListener("click",delet =>{
    const targetToDelet = popupcontainer[i]
    targetToDelet.classList.toggle("hide_delete")
  })
})

closePopUp.forEach(function(closeElement,i){
  closeElement.addEventListener("click", Cls=>{
    const targetToclose = popupcontainer[i]
    targetToclose.classList.toggle("hide_delete")

  })
})


deletBtn

/* =========*/


/* profile hide*/
function hideProfil(){
  profilCnt.classList.add("profil_hide")
  formProfil.classList.remove("hide_form")
}


/* print*/

  printBtnOne.forEach(function(onelement,i){
    onelement.addEventListener('click',(eprint)=>{
      const target  = printOneEttiquet[i]
      html2pdf(target)
    })
  })


function printettquet(){
  html2pdf(printAllEttiquet)
}

/*==============*/
/*
toggleBtn.addEventListener("click",()=>{
  navContainer.classList.toggle("hide_sidebar")
})

closeBtn.addEventListener("click",()=>{
  navContainer.classList.toggle("hide_sidebar")
})
 closesideClick.addEventListener("click",()=>{
   navContainer.classList.remove("hide_sidebar")
})

*/

selector.forEach(function(element){
    element.addEventListener("click",(e)=>{
       const li_hide =  e.currentTarget.parentElement
       const rotate = e.currentTarget.querySelector(".fa-angle-down")
       li_hide.classList.toggle("hide_sub")
       rotate.classList.toggle("fa-rotate-180")
    })
})

a_hover.forEach((element)=>{
  element.addEventListener("mouseover",(e)=>{
      const nav_hover = e.currentTarget.querySelector(".nav_hover")
      nav_hover.style.height = "90%";
  })
  element.addEventListener("mouseout",(e)=>{
      const nav_hover = e.currentTarget.querySelector(".nav_hover")
      const current = e.currentTarget
      if( !current.classList.contains("current_place")){
        nav_hover.style.height = "0%";
      }
  })
})

function PretNotification(){
  let NmbDiv = tableColisPretexp.length 
  if (NmbDiv!== 0) notifContent.classList.remove("hide_notif")
  notifContent.innerHTML = NmbDiv
}


/*
preNotification.addEventListener("submit",e =>{
  e.preventDefault()

  if (notifContent.classList.contains("hide_notif")){
    notifContent.classList.remove("hide_notif")
  }
  notfNumber++
  notifContent.innerHTML = notfNumber
})

*/