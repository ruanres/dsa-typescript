function firstRecurringChar(nums: number[]): number | undefined {
  const recurringNum: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(recurringNum[n] !== undefined) {
      return n;
    } 
    recurringNum[n] = i;
  }
  return undefined;
}

export default firstRecurringChar;
