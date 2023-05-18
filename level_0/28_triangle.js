/*
[문제 28]
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
- 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
세 변으로 삼각형을 만들 수 있다면 1,
만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

[조건]
-> sides의 원소는 자연수입니다.
-> sides의 길이는 3입니다.
-> 1 ≤ sides의 원소 ≤ 1,000
*/

const solution = (sides) => {
    const longest = Math.max(...sides);
    const sum = sides.filter((_, index) => index !== sides.indexOf(longest)).reduce((acc, cur) => acc + cur);
    
    return longest < sum ? 1 : 2;
}

solution([1, 2, 3]);    // 2
solution([3, 6, 2]);    // 2
solution([199, 72, 222]);   // 1

// 코드 깔끔하게
// const solution = (sides) => {
//     const max = Math.max(...sides);
//     const sum = sides.reduce((a,b) => a + b, 0) - max;

//     return max < sum ? 1 : 2;
// }