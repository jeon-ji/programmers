/*
[문제 20]
정수 n이 매개변수로 주어질 때,
n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ n ≤ 10,000
*/

const solution = (n) => {
    let array = [];
    for(let i=1; i<=n; i++) {
        if(n % i === 0)
            array.push(i);
    }

    return array;
}

solution(24);   // [1, 2, 3, 4, 6, 8, 12, 24]
solution(29);   // [1, 29]

// Array, fill, map, filter 사용하여 한줄 코드로
// const solution = (n) => {
//     return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
// }