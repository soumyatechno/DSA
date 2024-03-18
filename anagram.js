// const anagram = function (x, y) {
// 	const sortedX = x.split('').sort().join('');
// 	const sortedY = y.split('').sort().join('');

// 	return sortedX === sortedY;
// };

const isAnagram = function (x, y) {
	if (x.length !== y.length) return false;
	const obj1 = {};
	const obj2 = {};

	for (let i = 0; i <= x.length; i++) {
		obj1[x[i]] = obj1[x[i]] || 0;
		obj2[y[i]] = obj2[y[i]] || 0;
	}

	for (const keys in obj1) {
		if (obj1[keys] !== obj2[keys]) return false;
	}

	return true;
};

console.log(isAnagram('rat', 'tra'));
