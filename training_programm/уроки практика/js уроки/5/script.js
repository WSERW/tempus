//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//											 MAP
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// const myMap = new Map();

// const keyObj = {},
//     keyFunc = function () {},
//     keyString = 'a string';

// // задание значений
// myMap.set(keyString, 'value associated with “a string”');
// myMap.set(keyObj, 'value associated with keyObj');
// myMap.set(keyFunc, 'value associated with keyFunc');

// myMap.size; // 3

// // получение значений
// console.log(myMap.get(keyString));    // value associated with “a string”
// console.log(myMap.get(keyObj));       // value associated with keyObj
// console.log(myMap.get(keyFunc));      // value associated with keyFunc

// console.log(myMap.get('a string'));   // "value associated with 'a string'"
//                          // потому что keyString === 'a string'
// console.log(myMap.get({}));           // undefined, потому что keyObj !== {} ({} — это литеральная нотация конструктора класса Object)
// console.log(myMap.get(function() {})) // undefined, потому что keyFunc !== function () {}



// const myMap = new Map();
// myMap.set(0, 'zero');
// myMap.set(1, 'one');
// for (let [key, value] of myMap) {
//   console.log(key + ' = ' + value);
// }
// // 0 = zero
// // 1 = one

// for (var key of myMap.keys()) {
//   console.log(key);
// }
// // 0
// // 1

// for (var value of myMap.values()) {
//   console.log(value);
// }
// // zero
// // one

// for (var [key, value] of myMap.entries()) {
//   console.log(key + ' = ' + value);
// }
// // 0 = zero
// // 1 = one



// myMap.forEach(function(value, key) {
//   console.log(`${key} => ${value}`);
// });
// // 0 => zero
// // 1 => one

// const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// // Используйте конструктор Map для преобразования двумерных массивов в Map
// const myMap = new Map(kvArray);

// myMap.get('key1'); // вернёт “value1”

// // Используйте функцию Array.from для трансформации Map в двумерный key-value массив
// console.log(Array.from(myMap)); // Выведет точно такой же массив как kvArray

// // Или используйте итераторы  keys или values чтобы преобразовать ключи или значения в массивы
// console.log(Array.from(myMap.keys())); // Выведет ['key1', 'key2']


// const original = new Map([
//   [1, 'one']
// ]);

// const clone = new Map(original);

// console.log(clone.get(1)); // one
// console.log(original === clone); // false.

// const first = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);

// const second = new Map([
//   [1, 'uno'],
//   [2, 'dos']
// ]);

// // Слияние двух Map. Взят будет последний повторившийся ключ.
// // Оператор Spread по сути преобразует Map в массив
// const merged = new Map([...first, ...second]);

// console.log(merged.get(1)); // uno
// console.log(merged.get(2)); // dos
// console.log(merged.get(3)); // three


// const first = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);

// const second = new Map([
//   [1, 'uno'],
//   [2, 'dos']
// ]);

// // Слияние Map и массива. Как и при слиянии двух Map - взят будет последний повторившийся ключ.
// const merged = new Map([...first, ...second, [1, 'eins']]);

// console.log(merged.get(1)); // eins
// console.log(merged.get(2)); // dos
// console.log(merged.get(3)); // three


// //------------------------------------------------------------------------------------------
// //------------------------------------------------------------------------------------------
// //											 SET
// //------------------------------------------------------------------------------------------
// //------------------------------------------------------------------------------------------



// var mySet = new Set();

// mySet.add(1); // Set { 1 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add(5); // Set { 1, 5 }
// mySet.add("some text"); // Set { 1, 5, 'some text' }
// var o = {a: 1, b: 2};
// mySet.add(o);

// mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

// mySet.has(1); // true
// mySet.has(3); // false, 3 не было добавлено в set
// mySet.has(5);              // true
// mySet.has(Math.sqrt(25));  // true
// mySet.has("Some Text".toLowerCase()); // true
// mySet.has(o); // true

// mySet.size; // 5

// mySet.delete(5); // удаляет 5 из set
// mySet.has(5);    // false, 5 было удалено

// mySet.size; // 4, было удалено одно значение
// console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}



// // обход элементов set
// // выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
// for (let item of mySet) console.log(item);

// // выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
// for (let item of mySet.keys()) console.log(item);
 
// // выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2}
// for (let item of mySet.values()) console.log(item);

// // выведет элементы по порядку: 1, "some text", {"a": 1, "b": 2} 
// //(key и value в данном случае одинаковы)
// for (let [key, value] of mySet.entries()) console.log(key);

// // преобразует Set в Array
// var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// // следующее будет работать при запуске с HTML документом
// mySet.add(document.body);
// mySet.has(document.querySelector("body")); // true
// console.log(mySet)
// преобразования из Array в Set и обратно

// let arr = [1,2,3,4,4,4]
// console.log(arr)

// mySet2 = new Set(arr);
// mySet2.size; // 4
// arr = [...mySet2]; // [1,2,3,4]
// console.log(arr)
// set1 = new Set([1,2,3])
// set2 = new Set([3,4,4,4])



// // // пересечение можно представить следующим образом  
// var intersection = new Set([...set1].filter(x => set2.has(x)));

// // // разность можно представить следующим образом
// var difference = new Set([...set1].filter(x => !set2.has(x))); 


// console.log(intersection)

// console.log(difference)

// Обход элементов set при помощи forEach

// mySet = new Set([1,2,3,4])

// mySet.forEach(function(value) {
//   console.log(value);
// });

// // 1
// // 2
// // 3
// // 4


// function isSuperset(set, subset) {
//     for (var elem of subset) {
//         if (!set.has(elem)) {
//             return false;
//         }
//     }
//     return true;
// }

// function union(setA, setB) {
//     var _union = new Set(setA);
//     for (var elem of setB) {
//         _union.add(elem);
//     }
//     return _union;
// }

// function intersection(setA, setB) {
//     var _intersection = new Set();
//     for (var elem of setB) {
//         if (setA.has(elem)) {
//             _intersection.add(elem);
//         }
//     }
//     return _intersection;
// }

// function difference(setA, setB) {
//     var _difference = new Set(setA);
//     for (var elem of setB) {
//         _difference.delete(elem);
//     }
//     return _difference;
// }

// // Например
// var setA = new Set([1, 2, 3, 4]),
//     setB = new Set([2, 3,]),
//     setC = new Set([3, 4, 5, 6]);

// console.log(isSuperset(setA, setB));   // => true
// console.log(union(setA, setC));        // => Set [1, 2, 3, 4, 5, 6]
// console.log(intersection(setA, setC)); // => Set [3, 4]
// console.log(difference(setA, setC));   // => Set [1, 2]


// var myArray = ["value1", "value2", "value3"];

// // Используйте конструктор Set для преобразования Array в Set
// var mySet = new Set(myArray);

// mySet.has("value1"); // вернёт true

// // Используйте spread оператор для преобразования Set в Array
// console.log([...mySet]); // Отобразит тот же массив, что и myArray

// var text = 'India';

// var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
// console.log(mySet)
// mySet.size;  // 5


// let obj = {
// 	key1 :'value1',
// 	key2 :'value2',
// 	key3 :'value3',
// 	key4 :'value4',
// 	key5 :'value5',
// }

// let obj2 = {

// }

// let myMap = new Map(Object.entries(obj))
// // console.log(myMap)

// for(let [key,value] of myMap){
// 	obj2[key] = value;
// 	console.log(key);
// }
// console.log(obj2)




let a = "частнопредпринимательский"

let b = "одиннадцатиклассница"

let c = "сельскохозяйственно-машиностроительный"

let set = new Set()
let set2 = new Set()
let set3 = new Set()

for(i = 0; i < a.length; i++){
	set.add(a[i])
}
for(i = 0; i < b.length; i++){
	set2.add(b[i])
}
for(i = 0; i < c.length; i++){
	set3.add(c[i])
}

a = Array.from(set).join('')
b = Array.from(set2).join('')
c = Array.from(set3).join('')

console.log(a)
console.log(b)
console.log(c)