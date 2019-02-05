'use strict';

const minmax = function (string) {
	var arr = string.split(' ').map(x => parseFloat(x)).filter(x => !isNaN(x));
	if (arr.length === 0) {
		return [undefined, undefined];
	}
	return[Math.min(...arr), Math.max(...arr)];
}
