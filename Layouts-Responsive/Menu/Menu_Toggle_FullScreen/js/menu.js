let show = true

const menuSection = document.querySelector(".menuSection")
const menuHamburguer = menuSection.querySelector(".menuHamburguer")
const menuLink = document.querySelector(".menuSome")
menuHamburguer.addEventListener("click", () => {

	document.body.style.overflow = show ? "hidden" : "initial"
	menuSection.classList.toggle("on", show)
	show = !show;
 	 	
})


menuLink.addEventListener("click", () => {

	document.body.style.overflow = "initial"
	menuSection.classList.remove("on", show)
	show = !show;

})
	
