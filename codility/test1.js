function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  if (typeof S === "string") {
    S = parseInt(S, 2);
  }

  const isOdd = v => v % 2;

  count = 0;

  while (S > 0) {
    S = isOdd(S) ? S - 1 : S / 2;
    count++;
  }
  return count;
}

console.log(solution("011100") === 7);
