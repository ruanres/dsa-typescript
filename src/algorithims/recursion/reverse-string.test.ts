import reverseString from "./reverse-string";

describe('reverseString', () => { 

  it('should return an empty string when the input is empty', () => {
    expect(reverseString('')).toBe('');
  });
  it('should return the same string when its size is 1', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should reverse the input string', () => {
    expect(reverseString('home')).toBe('emoh');
    expect(reverseString('algorithm')).toBe('mhtirogla');
  });
 })