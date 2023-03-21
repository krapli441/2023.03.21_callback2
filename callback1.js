function add (number, append) {
  return number + append;
}

// ? 실행 구문을 만들어놓고 나중에 '호출' 할 때 사용하는 함수.
// ! 함수를 '정적'으로 제작했다. 필요할 때 할당, 호출하는 방식
// ! 미리 만들어 놓은 것이 문제.
// ? 알고리즘 ,즉 실행부를 즉석에서 만들 순 없나?

function tool (number, callback) {
  let a = number + 3;
  let b = number + 5;
  return callback(a, b);
}

// ! 세번째 매개변수 (가장 마지막 매개변수에 callback이라는 매개변수를 붙여줌)
// ! 인자를 '전달'받는다.
// ! 매개변수 자리에 '함수'가 들어가는 것을 콜백이라고 함.

// - 

console.log(tool(5, function(a,b){
  return a + b;
}));

// ? 함수를 '호출 할 때' 값이 결정됐다.

console.log(tool(5, add));

// ? 함수 호출이 아니고, 함수 이름만 가져왔는데 계산이 됐다.


// 원시값, 참조값의 차이 연구