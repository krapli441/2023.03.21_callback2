function exampleOneInnerFunc(message) {
  console.log(message);
}

function exampleOne(message) {
  exampleOneInnerFunc(message);
}

exampleOne("첫번째 함수 예제");

// ? 첫번째 함수인 exampleOne은 임의의 함수를 호출하는 기능을 함
// ? 호출한 함수의 기능이 무엇인지는 '호출될 함수'에게 맡기는 형태임
// ? 따라서 exampleOne()이라는 함수의 입장에선 console.log()를 실행하는 것인지 모르는 상태.
// ? 죽 ,호출당한 exampleOneInnerFunc() 함수가 어떤 기능을 하는지는 exampleOne() 함수가 알 필요가 없다.
// ? 이런 형태를 콜백이라고 함.

function exampleTwo(message, callback) {
  callback(message);
}

// ? exampleTwo()함수는 exampleOne()함수와 다르게
// ? 호출될 함수의 기능을 '직접' 작성하는 형태.
// ? 이러한 형태도 '콜백'이라고 한다.
// ? 해당 방식을 더 많이 사용하는 경향이 있음.
// ? 기능을 분리하여 작성하는 것이 아닌, 호출될 함수의 기능을 호출함과 동시에 작성하고 파악할 수 있다.
// ? 예제의 함수는 함수이긴 하지만 '이름이 없는' 함수다.

// ? 함수는 exampleTwo()라는 함수 하나이며, 콜백함수 한 개를 가지고 있다.
// ? exampleTwo() 첫번째 매개변수 message는 익명함수(콜백함수)의 매개변수로 전달된다.
// ? 이를 개발자들은 '인자가 전달되었다'고 한다.

function practice (number, callback) {
  callback (number);
}

practice (250, fuction(number) {
  console.log(number);
})