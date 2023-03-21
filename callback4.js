const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지";

function splitString(stringParams) {
  let result = stringParams.split(' ');
  return result;
}

// string의 '공백'을 기준으로 잘라낸 뒤 배열에 추가.
// [참깨빵, 위에, 순쇠고기, 패티, 두, 장] ... 이런 식으로 결과가 나올 것임.

function appendString(stringArray, callback) {
  let body = "";
  stringArray.forEach(function(element){
    body = body + element;
  });
  callback(body);
}

let bodyTemplate = ``;
let resultCase = appendString(splitString(stringExample), function(body) {
  console.log(body);
  bodyTemplate += body.substring(0, body.indexOf("티") +1 );
  console.log(bodyTemplate);
});

function elementMaker(string) {
  return `<div>${string}</div>`;
}

console.log(elementMaker(bodyTemplate));ß



// 함수 안에 함수를 '왜' 쓰는가?
// 원조값과 참조값을 연구해보자.