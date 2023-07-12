import fibonacci from "./fibonacci";
// Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
describe('fibonacci', () => { 
  it('should return 0 for index 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  it('should return 3 for index 4', () => {
    expect(fibonacci(4)).toBe(3);
  });

  it('should return 144 for index 12', () => {
    expect(fibonacci(12)).toBe(144);
  });
 })