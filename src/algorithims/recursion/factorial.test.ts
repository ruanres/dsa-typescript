import factorial from "./factorial";

describe('factorial', () => { 
  it('should return 1 when input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 6 when input is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 120 when input is 5', () => {
    expect(factorial(5)).toBe(120);
  });
 })