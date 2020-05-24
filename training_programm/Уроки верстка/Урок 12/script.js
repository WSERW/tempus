let myButton = document.querySelector('#myBtn')

myButton.onclick = function(event){alert('Hello world');};


function print(evt) {
  // параметру evt автоматически назначается объект события
  // позаботимся о различиях в console.log и alert
  console.log('print:', evt);
  alert(evt); 
}
// любая функция должна иметь подходящее имя, это то, что называется семантическим
let table_el = document.querySelector('#table_el');
table_el.onclick = print;   





// Предполагая, что myButton является элементом кнопки
myButton.addEventListener ('click', greet);


function greet (event) {
    // распечатать и посмотреть на объект события 
    // всегда печатать аргументы в случае пропуска любых других аргументов
    console.log ('greet---', arguments);
    alert('Привет, мир');     
}

document.onDOMContentLoaded = function() {
  alert("DOM построен"); // не будет работать
};
document.addEventListener("DOMContentLoaded", function() {
  alert("DOM построен(addEventListener)"); // а вот так сработает
});


myButton.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(this.innerHTML);
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
  };



//   class Menu {
//     handleEvent(event) {
//       switch(event.type) {
//         case 'mousedown':
//           elem.innerHTML = "Нажата кнопка мыши";
//           break;
//         case 'mouseup':
//           elem.innerHTML += "...и отжата.";
//           break;
//       }
//     }
//   }

//   let menu = new Menu();
//   elem.addEventListener('mousedown', menu);
//   elem.addEventListener('mouseup', menu);


//     class Menu {
//     handleEvent(event) {
//       // mousedown -> onMousedown
//       let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//       this[method](event);
//     }

//     onMousedown() {
//       elem.innerHTML = "Кнопка мыши нажата";
//     }

//     onMouseup() {
//       elem.innerHTML += "...и отжата.";
//     }
//   }

//   let menu = new Menu();
//   elem.addEventListener('mousedown', menu);
//   elem.addEventListener('mouseup', menu);