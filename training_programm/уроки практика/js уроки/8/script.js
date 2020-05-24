const obj = document.getElementById('second')
// const obj = document.documentElement

window.addEventListener('scroll',function() {
	if (obj.offsetTop <= document.documentElement.scrollTop) {
		alert("ss")
	}
	console.clear();
	//значения внешних отступов
	console.log('offsetLeft',obj.offsetLeft)
	console.log('offsetTop',obj.offsetTop)

	//значения внешних размеров
	console.log('offsetWidth',obj.offsetWidth)
	console.log('offsetHeight',obj.offsetHeight)


	//значения внутренних видимых размеров
	console.log('clientWidth',obj.clientWidth)
	console.log('clientHeight',obj.clientHeight)

	//значения внешних рамок
	console.log('clientLeft',obj.clientLeft)
	console.log('clientTop',obj.clientTop)

	//размеры блока(с учетом прокрутки)
	console.log('scrollHeight',obj.scrollHeight)
	console.log('scrollWidth',obj.scrollWidth)

	//прокрученая верхняя часть блока
	console.log('scrollTop',obj.scrollTop)
})
