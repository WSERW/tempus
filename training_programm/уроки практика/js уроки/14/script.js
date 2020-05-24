let dropLabel = document.querySelector("#drop-label")
let dropInfo = document.querySelector("#drop-info")

let	btn = document.querySelector("#send") 

let firstModal = document.querySelector("#first") 
let	close = document.querySelector("#close") 
let wraper = document.querySelector("#wraper") 
let	quest = document.querySelector("#quest") 


dropLabel.addEventListener('click',function () {
	if (dropInfo.style.display == "block") {
		dropInfo.style.display = "none"
	}
	else {
		dropInfo.style.display = "block"
	}
})
btn.addEventListener('click',function (){
	firstModal.style.display = 'block'
	// document.body.style.overflow = "hidden"
})
close.addEventListener('click',function (){
	firstModal.style.display = 'none'
	// document.body.style.overflow = "auto"
})
wraper.addEventListener('click',function (){
	firstModal.style.display = 'none'
	// document.body.style.overflow = "auto"
})

btn.addEventListener('mouseover',function(){
	quest.style.display = "block"
})
btn.addEventListener('mouseout',function(){
	quest.style.display = "none"
})