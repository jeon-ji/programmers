/*
[문제 9]
어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때
t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ n ≤ 10
-> 1 ≤ t ≤ 15
 */

const solution = (n, t) => {
    let answer = n;
    for(i=0; i<t; i++) {
       answer *= 2;
    }
    return answer;
}

solution(2, 10);   // 2048
solution(7, 15);   // 229376

// 비트 연산자 활용
// function solution(n, t) {
//     return n << t;
// }

// Math 객체 활용
// Math.pow() : 제곱 계산
// const solution = (n, t) => {
//     return n * Math.pow(2, t);
// }