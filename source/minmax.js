'use strict';

const minmax = string => {
	if (typeof string !== 'string') {
		return [null, null];
	}
	let arr = string.split(" ").reduce((accumulator, curr) => {
		if (!Number.isNaN(parseFloat(curr))) {
			accumulator.push(parseFloat(curr));
		}
		return accumulator;
	}, []);
	if (arr.length === 0) {
		return [null, null];
	}
	return[Math.min(...arr), Math.max(...arr)];
}
