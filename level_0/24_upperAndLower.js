/*
[문제 24]
문자열 my_string이 매개변수로 주어질 때,
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ my_string의 길이 ≤ 1,000
-> my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
*/

const solution = (my_string) => {
    let result = my_string.split('');
    for(i in my_string) {
        const ascii = my_string.charCodeAt(i);
        if(ascii > 91)
            result[i] = String.fromCharCode(ascii - 32);
        else
            result[i] = String.fromCharCode(ascii + 32);
    }
    
    return result.join('')
}

solution("cccCCC")  // "CCCccc"
solution("abCdEfghIJ")  // "ABcDeFGHij"

// toLowerCase, toUpperCase 사용
// const solution = (my_string) => {
//     const strArr = my_string.split('');
//     const result = strArr.map((v, index) => my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase());

//     return result.join('');
// }