'use strict';

const minmax = string => {
	let arr = string.split(' ').map(x => parseFloat(x)).filter(x => !Number.isNaN(x));
	if (arr.length === 0) {
		return [undefined, undefined];
	}
	return[Math.min(...arr), Math.max(...arr)];
}
