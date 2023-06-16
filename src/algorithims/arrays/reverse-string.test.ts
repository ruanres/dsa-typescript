import reverseString from "./reverse-string";

describe('reverseString', () => { 
  
  it('should reverse the string', () => {
    expect(reverseString('abcd')).toBe('dcba');
  });
 })