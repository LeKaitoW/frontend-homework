'use strict';

const minmax = string => {
	if (typeof string !== 'string') {
		return [undefined, undefined];
	}
	let arr = string.split(" ").reduce((accumulator, curr) => {
		if (!Number.isNaN(parseFloat(curr))) {
			accumulator.push(parseFloat(curr));
		}
		return accumulator;
	}, []);
	if (arr.length === 0) {
		return [undefined, undefined];
	}
	return[Math.min(...arr), Math.max(...arr)];
}
