// Palindrome number

const isPalindrome = function (x) {
	return x < 0 ? false : x === +x.toString().split('').reverse().join('');
};

const result = isPalindrome(525);
console.log(result);
