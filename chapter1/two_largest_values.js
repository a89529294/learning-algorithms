const unsortedArray = [1, 3, -9, 17, 100, 100, 0];

function largest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

function largest_2(arr) {
  let largest = arr[0];
  let second_largest = arr[1];
  if (second_largest > largest) {
    const temp = largest;
    largest = second_largest;
    second_largest = temp;
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      const temp = largest;
      largest = arr[i];
      second_largest = temp;
    } else if (arr[i] > second_largest) {
      second_largest = arr[i];
    }
  }

  return [largest, second_largest];
}

console.log(largest_2(unsortedArray));
