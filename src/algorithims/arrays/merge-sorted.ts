export default function mergeSorted(arr1: number[], arr2: number[]): number[] { // O(max(m, n))
  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  const merged = [];
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length) { // O(m) or O(n)
    if(arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) { // O(m - n)
    merged.push(arr1[i]);
    i++;
  }

  while(j < arr2.length) { // O(n - m)
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}