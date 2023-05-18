/*
[문제 31]
문자열 before와 after가 매개변수로 주어질 때,
before의 순서를 바꾸어 after를 만들 수 있으면 1을,
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 0 < before의 길이 == after의 길이 < 1,000
-> before와 after는 모두 소문자로 이루어져 있습니다.
*/

const solution = (before, after) => {
    after = after.split('');
    for(b of before) {
        const index = after.indexOf(b);
        if(index > -1)
            after.splice(after.indexOf(b), 1);
    }
    
    return after.length === 0 ? 1 : 0;
}

solution("olleh", "hello");      // 1
solution("olleh", "elloh");      // 1
solution("allpe", "apple");      // 0


// // 각각 배열을 정렬하여 일치 여부 확인
// const solution = (before, after) => {
//     return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
// }