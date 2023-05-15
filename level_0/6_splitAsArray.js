/*
[문제 6]
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ my_str의 길이 ≤ 100
-> 1 ≤ n ≤ my_str의 길이
-> my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
 */

const solution = (my_str, n) => {
    let array = [];
    while(my_str !== '') {
        array.push(my_str.substring(0, n));

        my_str = my_str.slice(n);
    }
    return array;
}

solution('abc1Addfggg4556b', 6);
solution('abcdef123', 3);

// 정규식 활용
// function solution(my_str, n) {
//   return my_str.match(new RegExp(`.{1,${n}}`, "g"));
// }

// for문 활용
// const solution = (my_str, n) => {    
//     let answer = [];
//     for(let i=0; i < my_str.length; i+=n) {
//         answer.push(my_str.substr(i, n));
//     }
//     return answer;
// }