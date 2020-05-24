// let user = new Object(); // синтаксис "конструктор объекта"
// let user = {};  // синтаксис "литерал объекта"

// let arr = new Array();
// let arr = []
// let user = {    // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };

// // получаем свойства объекта:
// alert( user.name ); // John
// alert( user.age ); // 30

// user.isAdmin = true;



// user["likes birds"] = true;
// alert(user.isAdmin)
// delete user.age;


// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")



// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"



// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };
// // key = 'age'
// // alert(key in user)

// for (let prop in user) {
//   // ключи
//   alert( prop );  // name, age, isAdmin
//   // значения ключей
//   alert( user[prop] ); // John, 30, true
// }

// let admin = user;

// admin.age = 29
// alert(admin.age)
// alert(user.age)
// alert(admin == user)




// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
//   alert(clone[key])
// }

// // теперь в переменной clone находится абсолютно независимый клон объекта.
// clone.name = "Pete"; // изменим в нём данные

// alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John.

// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }


// let clone = Object.assign({}, user);


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// alert( user['sizes']['height'] ); // 182


// const user = {
//   name: "John"
// };

// user.age = 25; // (*)

// alert(user.age); // 25
 


strArr = `Шанхай	24 256 800	6 340.50	3 826	Китай	false
Карачи	23 500 000	3 527.00	6 663	Пакистан	false
Пекин	21 516 000	16 410.54	1 311	Китай	true
Дели	16 349 831	1 483.00	11 025	Индия	true
Лагос	16 060 303	1 171.28	13 712	Нигерия	false
Тяньцзинь	15 200 000	11 760.00	1 293	Китай	false
Стамбул	14 160 467	5 461.00	2 593	Турция	false
Токио	13 513 734	2 191.00	6 168	Япония	true
Гуанчжоу	13 080 500	7 434.40	1 759	Китай	false
Мумбаи	12 442 373	603.40	20 620	Индия	false
Москва	12 197 596	2 510.12	4 859	Россия	true
Сан-Паулу	11 895 893	1 521.11	7 821	Бразилия	false
Шэньчжэнь	10 467 400	1 991.64	5 256	Китай	false
Джакарта	10 075 310	664.12	15 171	Индонезия	true
Лахор	10 052 000	1 772.00	5 673	Пакистан	false`.split(`\n`);


mass1 = ['city','population','area','population_density','country','is_capital'];

for(let i = 0;i<strArr.length;i++){
	strArr[i] = strArr[i].split(`	`);
	strArr[i] = wraper(mass1,strArr[i]);
}
console.log(strArr)



let obj = {}



let razn = []
let key = 0
function wraper(mass1,mass2) {
	let obj = {};
	maxLen = Math.max(mass1.length,mass2.length);
	minLen = Math.min(mass1.length,mass2.length);
	for (let i = 0; i < minLen; i++) {
		let key = mass1[i];
		obj[key] = mass2[i].replace(/\s(?=\d)/g,"" );
		String(Number(obj[key]))!="NaN"?obj[key]=Number(obj[key]):0
		obj[key]=='true'?obj[key]=true:obj[key]=='false'?obj[key]=false:0
		var lastKey = key;
	}
	if (mass1.length < mass2.length) {
		obj[lastKey]  = []
		for (let i = minLen - 1; i < maxLen; i++) {
			obj[lastKey].push(mass2[i])	
		}
	}
	else if(mass1.length > mass2.length){
		for (let i = minLen - 1; i <maxLen; i++) {
				key = mass1[i] 
				obj[key] = null
		}
	}
	return obj
}
console.log(strArr)

let strSorted = strArr.slice().sort((a, b) => a['population_density'] > b['population_density']?-1:1);

console.log(strSorted)
