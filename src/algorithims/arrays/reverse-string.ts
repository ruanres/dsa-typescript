export default function reverseString(input: string): string {
  const reversed: string[] = [];

  for (let i = input.length - 1; i >= 0; i--) {
    reversed.push(input[i]);
  }

  return reversed.join('');
}

