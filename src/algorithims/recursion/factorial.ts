
export default function factorial(n: number): number {
  return n > 0 ? n * factorial(n - 1) : 1;
}