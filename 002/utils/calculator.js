// 문자열로 된 수식을 입력받아서
// 사칙연산 순서에 상관 없이 계산하여
// 숫자를 반환하는 함수입니다.
//
// 입력 예시: "6+4*2/5"
// 출력 예시: 4

const add = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multily = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

/** 2개의 숫자와 기호를 통해 계산합니다.
 * ( num1: number, num2: number, sign: string )
 */
const calc = (num1, num2, sign) => {
  switch (sign) {
    case "+":
      return add(num1, num2);
    case "-":
      return minus(num1, num2);
    case "x":
      return multily(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return "기호가 올바르지 않습니다.";
  }
};

/** number와 sign배열을 비교해 값을 구합니다.
 * ( numbers: string[], signs: string[] )
 */
const calcWithArray = (numbers, signs) => {
  let result = 0;
  signs.map((sign, idx) => {
    if (isNaN(+numbers[idx]) || isNaN(+numbers[idx + 1]))
      return "올바른 숫자가 아닙니다.";

    let num1;

    idx === 0 ? (num1 = +numbers[idx]) : (num1 = result);

    result = calc(num1, +numbers[idx + 1], sign);
  });
  return Number.isInteger(result) ? result : result.toFixed(3) + "...";
};

/** 문자열의 수식을 입력 받아 계산값을 출력 합니다.
 * input string 예시: "3+5*8/4" |
 * output :: 16
 */
const calculator = (string) => {
  if (!string || string === "") return;

  const numbers = string.split(/\+|\-|\*|\//g);
  const signs = string.match(/\+|\-|\*|\//g);

  if (numbers === undefined || signs === undefined) {
    return "숫자와 +, -, *, /를 사용한 계산식을 입력해주세요.";
  }

  return calcWithArray(numbers, signs);
};

export { calculator, calcWithArray };
