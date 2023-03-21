const exampleArray = [142425, 1535312, 15527, 14233, 12329, 13214, 123266, 11343];
// 배열 선언

function minValue(array, callback) {
  let min = array[0]; // 142425
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return callback(min);
}

// ? min = 142425
// ? array[1] = 1535312
// ! if (array[1] < min) => if (1535312 < 142425)
// ! if를 만족하지 않으므로 다음으로 이행
// ? array[2] = 15527
// ! if (array[2] < min) => if (15527 < 142425)
// ! if를 만족함.
// ! min = array[i]로 인해서 min = 142425에서 min = 15527로 바뀜.
// ? 다시 반복문 실행...
// ! if (array[3] < min) => if (14233 < 15527)
// ! if를 만족함.
// ! min = array[i]로 인해서 min = 15527에서 min = 14233으로 바뀜.
// ? 다시 반복문 실행...
// ? ...
// ! 이렇게 반복문을 진행하다보면 min의 값은 배열에서 가장 작은 숫자로 바뀔 것임
// ! min = 11343이 됨
// ! min 값을 다른 함수 안의 매개변수에 넣는다 (여기서는 minValue 함수의 callback(매개변수)에 넣음)


const minValueExample = minValue(exampleArray, function (result) {
  return result * 2;
});
// ! minValue함수의 매개변수 안에 들어간 값(11343)으로 함수를 호출함.


console.log(minValueExample);