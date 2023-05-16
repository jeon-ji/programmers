/*
[문제 13]
수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

[조건]
-> 0 ≤ n ≤ 1,000,000
*/

// reduce 사용 시 초기 값은 문자열 형태 그대로 들어가기 때문에
// reduce 전 map으로 타입 변환 작업이 필요함.
const solution = (num) => {
    const digitArr = num.toString().split('');
    return digitArr.map((n) => Number(n)).reduce((a, b) => a + b);
}

solution(1234); // 10
solution(4321); // 10
solution(930211);   // 16