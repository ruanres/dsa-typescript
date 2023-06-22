import firstRecurringChar from "./first-recurring-char";

describe('first recurring char', () => { 
  
  it('should get 2 as the first recurring char', () => {
    expect(firstRecurringChar([2,5,1,2,3,5,1,2,4])).toEqual(2);
  });

  it('should get 1 as the first recurring char', () => {
    expect(firstRecurringChar([1,2,3,1,2])).toEqual(1);
  });

  it('should get undefined when there is no recurring char', () => {
    expect(firstRecurringChar([1,2,3])).toEqual(undefined);
  });
 })