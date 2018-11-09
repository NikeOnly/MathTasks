const givenString = '10*00*0';

function combinations (string) {
	let resultArray = [];
	const match = string.match(/[*]/g);
	const numberOfReplacedSymbols = match ? match.length : 0;

	for (let i = 0; i < numberOfReplacedSymbols; i++) {
		if (i === 0) {
			resultArray.push(string.replace('*', '0'));
			resultArray.push(string.replace('*', '1'));
		} else {
			resultArray = resultArray.reduce((acc, cur) => [
				...acc,
				cur.replace('*', '0'),
				cur.replace('*', '1'),
			], []);
		}
	}

	return resultArray;
}
// Limitations, for example, are that now used directly 1 and 0 as replaced values.
// If we need to extend, function can be transformed to take an array of replacements
// Or if we need not only * to be replaced, another regexp can be written

console.log('String', givenString);
console.log('Combinations result', combinations(givenString));