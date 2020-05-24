function kompile() {
	js = document.getElementById('js')
	code = js.value
	html = document.getElementById('html')
	dom = html.value
	append = document.getElementById('dom')
	append.innerHTML = dom
	eval(code)


	var ta = document.getElementById('html'); 
	//производим его выделение
	var range = document.createRange();
	range.selectNode(ta); 
	window.getSelection().addRange(range); 

	//пытаемся скопировать текст в буфер обмена
	try { 
	document.execCommand('copy'); 
	} catch(err) { 
	console.log('Can`t copy, boss'); 
	} 
	//очистим выделение текста, чтобы пользователь "не парился"
	window.getSelection().removeAllRanges();
}