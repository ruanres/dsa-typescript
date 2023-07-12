
export default function fibonacci(index: number): number {
  if (index < 2) {
    return index;
  }
  
  return fibonacci(index - 2) + fibonacci(index - 1);
}

