/*
[문제 15]
정수 num과 k가 매개변수로 주어질 때,
num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고
없으면 -1을 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 0 < num < 1,000,000
-> 0 ≤ k < 10
-> num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
*/

const solution = (num, k) => {
    const index = num.toString().indexOf(k);
    return index > -1 ? index + 1: index;
    // return index + 1 || index;
}

solution(29183, 1);     // 3
solution(232443, 4);    // 4
solution(123456, 7);    // -1
solution(223344, 3);    // 3
solution(0, 1);         // -1
solution(123456, 6);    // 6
