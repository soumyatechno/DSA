const fibonacci = function (x) {
	return x <= 1 ? x : fibonacci(x - 1) + fibonacci(x - 2);
};
console.log(fibonacci(4));
