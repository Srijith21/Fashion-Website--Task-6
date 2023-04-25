const MenuIcon= document.getElementById("MenuButton")
const SideBar= document.getElementById("SideMenuBar")

 MenuIcon.addEventListener('click',()=>{
    SideBar.classList.toggle('active')
 })