/*
[문제 11]
문자열 str1, str2가 매개변수로 주어집니다.
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ str1의 길이 ≤ 100
-> 1 ≤ str2의 길이 ≤ 100
-> 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.
*/

const solution = (strA, strB) => {
    return strA.includes(strB) ? 1 : 2;
}

solution('ab6CDE443fgh22iJKlmn1o','6CD'); // 1
solution('ppprrrogrammers','pppp'); // 2
solution('AbcAbcA','AAA');  // 2