//for loop
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

for (var i=0; i< todos.length; i++) {
	console.log(todos[i] = todos[i] + "!");
}

console.log(todos);

// var todosLength = todos.length;
// for (var i=0; i< todosLength; i++) {
// 	console.log(todos.pop());
// }

logTodos = function(i) {
	console.log("forEach", i);
}

todos.forEach(logTodos);





console.log(todos);

// //while loop count up!
// var counterOne = 0;
// while (counterOne < 10) {
// 	console.log("while", counterOne);
// 	counterOne++;
// }

// //while loop count down!
// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log("while", counterOne);
// 	counterOne--;
// }


// //infiniteloop!
// // var counterOne = 10;
// // while (counterOne > 0) {
// // 	console.log(counterOne);
// // 	counterOne++;
// // }

// //do while
// var counterTwo = 10
// do {
// 	console.log("do while", counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);

// //do while
// var counterTwo = 10
// do {
// 	console.log("do while", counterTwo);
// 	counterTwo--;
// } while (counterTwo > 10);

// //while loop count down!
// var counterOne = 10;
// while (counterOne > 10) {
// 	console.log("while", counterOne);
// 	counterOne--;
// }

