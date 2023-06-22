export default function maxSubarray(arr: number[]): number { // O(nˆ2)
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}