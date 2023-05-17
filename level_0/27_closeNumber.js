/*
[문제 n]
정수 배열 array와 정수 n이 매개변수로 주어질 때,
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

[조건]
-> 1 ≤ array의 길이 ≤ 100
-> 1 ≤ array의 원소 ≤ 100
-> 1 ≤ n ≤ 100
-> 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
*/

const solution = (array, n) => {
    const arr = array.sort();   // 가까운 수 중 큰 수가 앞에 배치되어 있을 경우 앞의 수가 리턴되기 때문에 오름차순 정렬 후 로직 진행
    const result = arr.reduce((acc, cur) => Math.abs(acc - n) <= Math.abs(cur - n) ? acc : cur, 0);

    return result;
}

solution([3, 10, 28], 20);  // 28
solution([10, 11, 12, 14], 13); // 12
solution([10, 11, 14, 12], 13); // 12