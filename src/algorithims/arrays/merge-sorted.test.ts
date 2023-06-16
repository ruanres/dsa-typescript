import mergeSorted from "./merge-sorted";

describe('mergeSorted', () => { 
  
  it('should merge the sorted arrays', () => {
    expect(mergeSorted([0,3,4,31], [4,6,30])).toEqual([0,3,4,4,6,30,31]);
  });

  it('should merge the sorted arrays with same size', () => {
    expect(mergeSorted([4], [0])).toEqual([0,4]);
  });

  it('should return the other array if one of them is empty', () => {
    expect(mergeSorted([], [0,5,90])).toEqual([0,5,90]);
    expect(mergeSorted([0,5,90], [])).toEqual([0,5,90]);
  });
 })