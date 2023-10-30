function solution(number) {
    return Array.from({ length: number - 1 }, (_, i) => ++i).filter(a => a % 3 === 0 || a % 5 === 0).reduce((a, b) => a + b, 0)
  }