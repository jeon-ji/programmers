/*
[문제 8]
영어 대소문자로 이루어진 문자열 str이 매개변수로 주어질 때,
str을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 0 < str 길이 < 100
 */

const solution = (str) => {
    return str.toLowerCase().split('').sort().join('');
 }

 solution("Bcad");  // abcd
 solution("heLLo"); // ehllo
 solution("Python");    // hnopty