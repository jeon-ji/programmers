/*
[문제 22]
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을
return 하도록 solution 함수를 완성해보세요.

[조건]
-> 1 < my_string의 길이 < 100
-> 0 ≤ num1, num2 < my_string의 길이
-> my_string은 소문자로 이루어져 있습니다.
-> num1 ≠ num2
*/

const solution = (my_string, num1, num2) => {
    const arr = my_string.split('');
    const str1 = arr[num1];
    const str2 = arr[num2];
    arr[num1] = str2;
    arr[num2] = str1;

    return arr.join('');
}

solution("hello", 1, 2);    // "hlelo"
solution("I love you", 3, 6);   // "I l veoyou"\

// Array destructuring 활용
// const solution = (my_string, num1, num2) => {
//     let arr = my_string.split("");
//     [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
//     return arr.join("");
// }