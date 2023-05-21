const solution = (park, routes) => {
    // 방향별 계산을 위한 배열
    const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

    // 시작점 찾기
    let [x, y] = [0, 0];
    for (let i = 0; i < park.length; i++) {
      if (park[i].includes('S')) {
        [x, y] = [i, park[i].indexOf('S')];
        break;
      }
    }

    // 경로 순서대로 로직 진행
    routes.forEach((route) => {
      const [r, n] = route.split(' ');  // r: 방향, n: 횟수
      let [nx, ny] = [x, y];
      let cnt = 0;
      while (cnt < n) {
        [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];  // 방향에 맞추어 한칸씩 이동
        if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;  // 이동한 칸의 값이 없거나 X일 경우 반복문 중단
        cnt++;
      }
      if (cnt == n) [x, y] = [nx, ny];  // 반복문 수행 크기와 n의 크기가 같을 경우 값 업데이트
    });
    return [x, y];
}

solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]);     // [2,1]
solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"]);     // [0,1]
solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]);       // [0,0]


// 코드 정리없이 문제 읽으며 구현
// const solution = (park, routes) => {
//     const width = park[0].length - 1;
//     const height = park.length - 1;
//     let location = [0, 0];
//     park = park.map((p, x) => {
//         const y = p.split('').indexOf('S');
//         if(y > -1) location = [x, y];
//         return p.split('');
//     });

//     for(r of routes) {
//         let [op, n] = r.split(' ');
//         n = parseInt(n)
//         if(op === 'E') {
//             if(location[1] + n > width) continue;
//             let tmp = [];
//             for(i=location[1]; i<= location[1] + n; i++) {
//                 tmp.push(park[location[0]][i]);
//             }

//             if(tmp.includes('X')) continue;
//             location = [location[0], location[1] + n]
//         }else if(op === 'W') {
//             if(location[1] - n < 0) continue;
//             let tmp = [];
//             for(i=location[1]; i >= location[1] - n; i--) {
//                 tmp.push(park[location[0]][i]);
//             }

//             if(tmp.includes('X')) continue;
//             location = [location[0], location[1] - n]
//         }else if(op === 'S') {
//             if(location[0] + n > height) continue;
//             let tmp = [];
//             for(i=location[0]; i<= location[0] + n; i++) {
//                 tmp.push(park[i][location[1]]);
//             }

//             if(tmp.includes('X')) continue;
//             location = [location[0] + n, location[1]]
//         }else if(op === 'N') {
//             if(location[0] - n < 0) continue;
//             let tmp = [];
//             for(i=location[0]; i >= location[0] - n; i--) {
//                 tmp.push(park[i][location[1]]);
//             }

//             if(tmp.includes('X')) continue;
//             location = [location[0] - n, location[1]]
//         }
//     }
    
//     return location;
// }