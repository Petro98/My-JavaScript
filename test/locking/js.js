// function create(n){
// 	return function(num){
// 		return n + num
// 	}
// }

// let addOne = create(8)
// console.log(addOne(8));

// ----------------------------------------------
// function urlGenerator(domain){
// 	return function(url){
// 		return `https://${url}.${domain}`
// 	}
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('google'));

// -------------------------------------

function bindb (context, fu ){
	return function(){
		fu.apply(context )
	}
}

function logPerson(){
	console.log(`Person: ${this.name}, ${this.age}, ${this.job},`);
}

const person = {name:'Mиха' , age: 22 , job:'Frontend'}

bindb (person,logPerson)()