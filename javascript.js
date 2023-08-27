const openmyslidebar = document.getElementById("openmyslidebar")
const slidebar = document.getElementById("slidebar")
const closemyslidebar = document.getElementById("closemyslidebar")


let menuOpen = false

function openMenu(){
    menuOpen = true
    openmyslidebar.style.display = "block"
    slidebar.style.width = "200px"
   
   

}
function closeMenu(){
    menuOpen = false
    closemyslidebar.style.display = "none"
    slidebar.style.width = "0px"
   
   
    
}

openmyslidebar.addEventListener("click",function(){
    if (!menuOpen) {
        openMenu()
    }
})
closemyslidebar.addEventListener("click",function() {
     if (menuOpen) {
        closeMenu()
        
     }
})