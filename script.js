//for loop
var toDo = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];	

console.log("toDo", toDo);

var workDone = [];

for (var i=0; i < toDo.length; i++) {
	console.log(workDone[i] = toDo[i] + " - done!");
}

console.log("workDone", workDone);

var toDoList = []; 

toDo.forEach(function(i){
	console.log(toDoList[i] = toDo[i] + " - needs rework!");	
})

console.log("toDoList", toDoList);

/*var counterOne = 10;
while (counterOne > 0) {
	console.log(counterOne);
	counterOne--;
}*/