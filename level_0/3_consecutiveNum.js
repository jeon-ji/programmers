/*
[문제 3]
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때,
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

[조건]
-> 1 ≤ num ≤ 100
-> 0 ≤ total ≤ 1000
-> num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
 */
const solution = (num, total) => {
    let answer = [];
    if(num % 2 === 0) {
        const refVal = total / num;
        const minRef = Math.floor(refVal);
        const maxRef = Math.ceil(refVal);
        answer.push(minRef);
        answer.push(maxRef);
        for(let i = 1; i < (num / 2); i++) {
            answer.push(minRef - i);
            answer.push(maxRef + i);
        }
    }else {
        const refVal = total / num;
        answer.push(refVal);
        for(let i = 1; i < (num / 2); i++) {
            answer.push(refVal - i);
            answer.push(refVal + i);
        }
    }

    return answer.sort((a, b) => a - Math.abs(b))
}

solution(3, 12);    // [ 3, 4, 5 ]
solution(5, 15);    // [ 1, 2, 3, 4, 5 ]
solution(4, 14);    // [ 2, 3, 4, 5 ]
solution(5, 5);     // [ -1, 0, 1, 2, 3 ]
solution(5, 0);     // [-2, -1, 0, 1, 2]



// 깔끔한 코드
// total/num => 수열의 평균값 num/2 => 수열의 마지막에서 중앙까지의 등차 계산 ceil와 floor를 활용 수 있는 이유는 등차가 1이기때문이다.
// const solution = (num, total) => {
//     const min = Math.ceil(total/num - Math.floor(num/2));
//     const max = Math.floor(total/num + Math.floor(num/2));

//     return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
// }