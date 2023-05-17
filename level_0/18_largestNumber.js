/*
[문제 18]
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 1 ≤ array의 길이 ≤ 100
-> 0 ≤ array 원소 ≤ 1,000
-> array에 중복된 숫자는 없습니다. 
*/

const solution = (array) => {
    let resNum = 0;
    let resIndex = 0;
    array.map((num, index) => {
        if(resNum < num) {
            resNum = num;
            resIndex = index;
        }
    })

    return [resNum, resIndex];
}

solution([1, 8, 3]);    // [8, 1]
solution([9, 10, 11, 8]);   // [11, 2]


// Math, indexOf 함수 사용
// const solution = (array) => {
//     let resNum = Math.max(...array);
//     let resIndex = array.indexOf(resNum);

//     return [resNum, resIndex];
// }