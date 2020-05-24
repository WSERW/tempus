let dropLabel = document.querySelector("#drop-label")
let dropInfo = document.querySelector("#drop-info")



dropLabel.addEventListener('click',function () {
	if (dropInfo.style.display == "block") {
		dropInfo.style.display = "none"
	}
	else {
		dropInfo.style.display = "block"
	}
})
