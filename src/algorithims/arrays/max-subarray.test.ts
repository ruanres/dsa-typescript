import maxSubarray from "./max-subarray";

describe('maxSubarray', () => { 
  
  it('should get the max sum', () => {
    expect(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  });

  it('should get the max sum', () => {
    expect(maxSubarray([-2,-1])).toEqual(-1);
  });
 })