// function Movie(name,ganre,year,director) {
// 	this.name = name;
// 	this.ganre = ganre;
// 	this.year = year;
// 	this.director = director
// 	this.displayFilm = displayFilm
// }
// function displayFilm(){
// 	let result = 'Film ' + this.name + ' in ganre ' +  this.ganre + ' was made in ' + this.year + ' by ' + this.director.name;
// 	console.log(result)
// }


// function Director(name,age,rewards,movies){
// 	this.name = name;
// 	this.age = age;
// 	this.rewards = rewards;
// 	this.movies = movies;
// }
// let quentinT = new Director('Quentin Tarantino',57,'many')
// console.log(quentinT)

// let film = new Movie('Pulp fiction','black comedy',1994,quentinT)
// console.log(film)

// let film2 = new Movie('Kill bill','action',2003,quentinT)
// console.log(film2)

// quentinT.movies = [film,film2]
// console.log(quentinT)


// film.displayFilm()
// film2.displayFilm()

// let Animal = {
// 	type : 'Invertebrates',
// 	displayType: function(){
// 		console.log(this.type)
// 	},
// }


// let animal1 = Object.create(Animal)
// animal1.displayType()

let sum = {
	value: 0,
	plus: plus,
	minus: minus,
	showValue: showValue,
};

function plus(){
	this.value++
	return this
};

function minus(){
	this.value--
	return this
};

function showValue() {
	console.log(this.value)
}


sum.plus().minus().plus()

sum.showValue()