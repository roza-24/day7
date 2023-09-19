function MajoritySweeper(arr) {
 
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (count[value]) {
      count[value]++;
    } else {
      count[value] = 1;
    }
  }

  let majorityValue = null;
  let majorityCount = 0;
  for (const value in count) {
    if (count[value] > majorityCount) {
      majorityValue = value;
      majorityCount = count[value];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value !== majorityValue) {
      result.push(value);
    }
  }

  return result;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]));
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000]));
console.log(MajoritySweeper([2, 2]));
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2]));

  