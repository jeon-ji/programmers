/*
[문제 7]
정수 배열 array가 매개변수로 주어질 때,
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 1 ≤ array의 길이 ≤ 100
-> 0 ≤ array의 원소 ≤ 100,000
 */

const solution = (array) => {
    const regex = new RegExp(/7/g)
    let matchArr = array.toString().match(regex);

    return matchArr?.length || 0;
}

solution([7,77,17,60]);    // 4
solution([10, 29]);    // 0

// toString()이 아닌 join 활용
// function solution(array) {
//     return array.join("").match(/7/g)?.length || 0;
// }