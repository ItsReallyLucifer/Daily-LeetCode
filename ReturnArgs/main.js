// Write a function that returns the count of arguments passed to it.


function argumentsLength (...args) {
	return args.length
};

console.log(argumentsLength(7,8,9)) // 3
console.log(argumentsLength(5,9,'String',1)) // 4

