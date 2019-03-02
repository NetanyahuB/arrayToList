function arrayToList(array) {
	var list = {};
	for (var i = 0; i <= array.length; i++) {
		if (i < array.length) {
			finalelist = {value:array.length, rest: list};
			list = {value:array[array.length - i - 1], rest: list};
		}
	}
	list.rest.rest.rest = null;
	return list;
}
var x = [1, 2, 3];
console.log(arrayToList(x));