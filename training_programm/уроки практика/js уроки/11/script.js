let i = 1
function btnClick()
  {
    var Txt1 = "";
    var Txt2 = "";
    Txt1 = document.Test.test.value;
    Txt2 = document.Test.test.name;
    console.log("Вы нажали кнопку: " + Txt1 +" с именем: "  + Txt2);
	document.Test.pay[2].click()
 	document.Test.comment.focus()
  	document.Test.comment.select()
}
console.log('все элементы формы:',document.Test.elements)

// общие свойства (спрашиваем у первого объекта в форме)
console.log('имя объекта:',document.Test.elements[0].name)

console.log('значение объекта:',document.Test.elements[0].value) // может быть пустым
console.log('значение объекта:',document.Test.elements[2].value) // или не пустым
// иммитация нажатия кнопки
document.Test.elements[11].click()

//чекбоксы 
console.log('установлен ли флажок:',document.Test.elements[3].checked)
console.log('установлен ли флажок по умолчанию:',document.Test.elements[3].defaultChecked)

//радиокнопки
console.log('установлен ли флажок:',document.Test.elements[5].checked)
console.log('установлен ли флажок по умолчанию:',document.Test.elements[5].defaultChecked)
console.log('количество переключателей:',document.Test.pay.length)

//выпадающий список
let pizza = document.Test.pizza
console.log('количество опций:',pizza.length)
console.log('индекс выбранного пункта',pizza.selectedIndex)
console.log('массиив доступных опций',pizza.options)
console.log('значение выбранной опции',pizza.value)
console.log('выбрана ли данная опция',pizza[0].selected)
console.log('выбрана ли данная опция по умолчанию',pizza[0].defaultSelected)
pizza[2].selected = true // иммитация выбора данной опции
pizza.focus() // передача фокуса для выбора
pizza.blur() // снятие фокуса


