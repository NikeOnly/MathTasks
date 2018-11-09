const givenLists = [[1,3], ['a'], [4,5]];

function premutations(lists) {
  if (lists.length === 0) return [];
  if (lists.length === 1) return lists[0];

  const result = [];
	const remainingСases = premutations(lists.slice(1));
		
	for (let i = 0; i < remainingСases.length; i++) {
		for (let j = 0; j < lists[0].length; j++) {
			// check to desctructure only in case of array
			let cases = Array.isArray(remainingСases[i]) ? [...remainingСases[i]] : [remainingСases[i]]

			result.push([
				lists[0][j],
				...cases
			]);
    }
	}
	
	return result;
}

console.log('Lists', givenLists);
console.log('Premutations result', premutations(givenLists));