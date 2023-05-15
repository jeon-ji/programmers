/*
[문제 2]
등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

[조건]
-> 2 < common의 길이 < 1,000
-> -1,000 < common의 원소 < 2,000
   : common의 원소는 모두 정수입니다.
-> 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
-> 등비수열인 경우 공비는 0이 아닌 정수입니다.
*/

const solution = (common) => {
    let answer = 0;
    let value = common[2] - common[1];
    if(common[1] - value === common[0])
        answer = common[common.length - 1] + value;
    else {
        value = common[1] / common[0];
        answer = common[common.length - 1] * value;
    }
    return answer;
}

// solution([1,2,3,4]); // 5
// solution([2,4,8]);  // 16
// solution([5,10,20,40]); // 80
// solution([5,10,15,20]); // 25