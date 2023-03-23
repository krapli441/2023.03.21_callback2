
function two(a,callback) {
  let result = arguments[0] + 1;
  return callback(result);
}

// ! arguments[0] : 인수의 첫번째 값을 가져옴.
// ! arguments[1] : 인수의 두번째 값...
// ? arguments = 함수의 인수를 뜻함

console.log(
  
  two(2, function() {
    let value = arguments[0] + 10;
    return value;
  })

  );