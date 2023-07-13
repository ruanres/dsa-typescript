export default function reverseString(input: string): string {
  if (input.length < 2) {
    return input;
  }

  const lastCharIndex = input.length - 1;
  return input.charAt(lastCharIndex) + reverseString(input.slice(0, lastCharIndex));
}