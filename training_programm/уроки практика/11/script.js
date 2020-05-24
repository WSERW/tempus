let b = false;
	let y = "";
	let x = "";
	let reg = ["Derpe", "Jony", "Steve"];
	$("#sp").text(reg.length);
	for (var i = 0; reg.length>i; i++) {
	$("#sel").append("<option>" + reg[i] + "</option>");
}
	$("#ok").click(function(){
		// alert("Кол-во зарегистрированых людей: " + reg.length);
let t = $("#name").val();
	 b = reg.includes(t);
	 if(!b){
y = prompt("Хотите добавиться в список? да/нет");
if(y == "да"){
reg.push(t);
$("#sel").append("<option>" + t + "</option>");
alert("Вы добавлены.");
}else if(y == "нет"){
alert("Как хотите.");
}else{
alert("не понятно что вы сказали");
}
}else{
x = prompt("Вы есть в списке. Хотите удалиться? да/нет");
if(x == "да"){
for(let i = 0; i<reg.length; i++){
if(reg[i] == t){
reg.splice(i, 1);
$("#sel").children().eq(i).remove()
}
}
alert("Вы удалины.");
}else if(x == "нет"){
	alert("Как хотите.");
}else{
alert("не понятно что вы сказали");
}
}
$("#sp").text(reg.length);
	
});
	$("#sel").children().click(function(){
		$("#name").val($(this).text());
		alert("воно работает");
	})
	// alert("Последний в списке: " + reg[reg.length-1]);
	// let name = prompt("Скажите ваше имя пожалуйста:");
	// b = reg.includes(name);
	// alert(reg);
	// if(!b){
	// 	y = prompt("Хотите добавиться в список? да/нет");
	// 	if(y == "да"){
	// 	reg.push(name);
	// 	alert("Вы добавлены.");
	// }else if(y == "нет"){
	// 	alert("Как хотите.");
	// }else{
	// 	alert("не понятно что вы сказали");
	// }
	// }else{
	// 	x = prompt("Вы есть в списке. Хотите удалиться? да/нет");
	// 	if(x == "да"){
	// 	for(let i = 0; i<reg.length; i++){
	// 		if(reg[i] == name){
	// 			reg.splice(i, 1);
	// 		}
	// 	}
	// 	alert("Вы удалины.");
	// }else if(x == "нет"){
	// 	alert("Как хотите.");
	// }else{
	// 	alert("не понятно что вы сказали");
	// }
	// }