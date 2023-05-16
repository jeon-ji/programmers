/*
[문제 12]
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

[조건]
-> 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
-> 1 ≤ quiz의 길이 ≤ 10
-> X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
-> X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
-> -10,000 ≤ X, Y ≤ 10,000
-> -20,000 ≤ Z ≤ 20,000
-> [연산자]는 + 와 - 중 하나입니다.
*/

const solution = (quiz) => {
    let result = [];
    for(str of quiz) {
        const arr = str.split(' ');
        const num1 = Number(arr[0]);
        const num2 = Number(arr[2]);
        const numResult = Number(arr[4]);
        if(arr[1] === '+') {
            result.push(num1 + num2 === numResult ? "O":"X");
        }else {
            result.push(num1 - num2 === numResult ? "O":"X");
        }
    }
    return result;
}


solution(["3 - 4 = -3", "5 + 6 = 11"]); //["X","O"]
solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]);   // ["O","O","X","O"]

// eval 함수 사용
// eval() : 문자열을 코드로 인식하게 하여 결과 값 리턴
//        : 보안에 취약하여 사용 지양
//        : 악의적인 스크립트를 실행할 수 있음
// const solution = (quiz) => {
//   return quiz
//   .map((el) => el.split(" = "))
//   .map((el) => {
//     return eval(el[0]) == el[1] ? "O" : "X";
//   });
// }
// 