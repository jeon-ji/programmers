/*
달리기 경주
 - players 배열의 최대 길이는 50,000
 - callings 배열의 최대 길이는 1,000,000
*/

// HashMap 자료구조는 특정 데이터에 접근할 때 key로 접근하기 때문에 O(1)의 시간복잡도를 가진다
const solution = (players, callings) => {
  const playersMap = new Map(players.map((p, i) => [p, i]));

  callings.map((call) => {
      const index = playersMap.get(call);
      const pre = players[index - 1];
      [players[index], players[index -1]] = [players[index -1], players[index]];
      
      playersMap.set(call, playersMap.get(call) - 1);
      playersMap.set(pre, playersMap.get(call) + 1);
  })

  return players;
}

// 실패 풀이 => 시간 초과
// 배열에서의 특정 데이터에 접근하기 위해 걸리는 시간 복잡도는 O(n)이다.
// const solution = (players, callings) => {
//     callings.map((call) => {
//         const index = players.indexOf(call);
//         const player = players.splice(index, 1);
//         players.splice(index -1, 0, player[0]);
//     })
//     return players;
// }

solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]);