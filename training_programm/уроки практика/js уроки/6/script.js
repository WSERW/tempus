// const myElement = document.querySelector('#foo > div.bar')

// console.log(myElement.style.background = 'red')
// console.log(myElement)

// проверка на наличие элемента
// console.log(myElement.matches('div.bar') === true)


// const myElements = document.querySelectorAll('.bar')
// console.log(myElements)

// поиск в несколько действий
// const myChildElemet = myElement.querySelector('input[type="submit"]')
// // Вместо:
// // document.querySelector('#foo > div.bar input[type="submit"]')


// отличия методов querySelectorAll и getElementsByTagName
// const elements1 = document.querySelectorAll('div')
// const elements2 = document.getElementsByTagName('div')
// const newElement = document.createElement('div')

// document.body.appendChild(newElement)
// console.log(elements1.length === elements2.length) // false


// // Использование Array.from()
// Array.from(myElements).forEach(elem => console.log(elem))
// // Или прототип массива (до ES6)
// Array.prototype.forEach.call(myElements, doSomethingWithEachElement)
// // Проще:
// [].forEach.call(myElements, doSomethingWithEachElement)



// console.log(myElement.children)
// console.log(myElement.firstElementChild)
// console.log(myElement.lastElementChild)
// console.log(myElement.previousElementSibling)
// console.log(myElement.nextElementSibling)



// console.log(myElement.childNodes)
// console.log(myElement.firstChild)
// console.log(myElement.lastChild)
// console.log(myElement.previousSibling)
// console.log(myElement.nextSibling)
// console.log(myElement.parentNode)
// console.log(myElement.parentElement)


// console.log(myElement.firstChild.nodeType === 3) // этот элемент будет текстовым узлом


// myElement.classList.add('foo')
// myElement.classList.remove('bar')
// myElement.classList.toggle('baz')



// // Получение значения атрибута
// const value = myElement.value

// // Установка атрибута в качестве свойства элемента
// myElement.value = 'foo'

// // Для установки нескольких свойств используйте .Object.assign()
// Object.assign(myElement, {
//  value: 'foo',
//  id: 'bar'
// })

// // Удаление атрибута
// myElement.value = null


// myElement.style.marginLeft = '2em'

// оптимизированная форма изменения атрибутов
// window.getComputedStyle(myElement).getPropertyValue('margin-left')
// let element1 = document.querySelector('#foo > div.bar')

// // Добавление element1 как последнего дочернего элемента element2
// element1.appendChild(element2)
// // Вставка element2 как дочернего элемента element1 перед element3
// element1.insertBefore(element2, element3)
// let colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]; 
// 	i = 0;
// function funfun() {i = 0;
// 	console.log('произошло нажатие')
// 	if (i > 4) {
	
// 	}
// 	else {
// 		console.log(i)
// 		document.body.style.backgroundColor = colorArray[i];
// 		i++;
// 	}


// }	
// ---------------------------1,4,5)

function add() {
	ul = document.querySelector('ul');
	massLi = document.querySelectorAll('li')
	massLi = Array.from(massLi)
	li = document.createElement('li');
	li.innerText = 'new link'	
	ul.appendChild(li)
	for (let i = 0; i < massLi.length; i++) {
		if (massLi[i].innerText.indexOf(' - выполнено',-13) == -1) {
			massLi[i].innerText += ' - выполнено'
		}
	}

	console.log(massLi[1].previousElementSibling,massLi[1].nextElementSibling,massLi[1])
}

// // ---------------------------2)
// i = 0
// function add() {
// 	colors = ['red', 'black', 'grey', 'blue']
// 	box = document.querySelector('.box')
// 	i = Math.floor(Math.random() * colors.length)
// 	box.style.backgroundColor = colors[i]	
// 	console.log(i)
// }


// // ---------------------------3)

// function add() {
// 	cont = document.querySelector('.container')
// 	but = document.querySelector('button')
// 	cont.appendChild(but.cloneNode(true))
// }