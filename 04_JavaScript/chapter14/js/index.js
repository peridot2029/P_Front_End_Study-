// -----------------------------------------------------------------------------------------
// JavaScript - 변수 / 함수 호이스팅(Hoisting, 끌어 올려짐)
// -----------------------------------------------------------------------------------------

// 호이스팅(hoisting)은 ECMAScript® 2015 언어 명세 및 그 이전 표준 명세에서 사용된 적이 없는 용어입니다. 
// 호이스팅은 JavaScript에서 실행 콘텍스트(특히 생성 및 실행 단계)가 어떻게 동작하는가에 대한 일반적인 생각으로 
// 여겨집니다. 하지만 호이스팅은 오해로 이어질 수 있습니다. 

// 예를 들어, 호이스팅을 변수 및 함수 선언이 물리적으로 작성한 코드의 상단으로 옮겨지는 걸로 가르치지만, 
// 실제로는 그렇지 않습니다. 변수 및 함수 선언은 컴파일 단계에서 메모리에 저장되지만, 코드에서 입력한 위치와 
// 정확히 일치한 곳에 있습니다.

// 자바스크립트는 코드가 실행되기 이전에 메모리 등록할 것을 먼저 처리해준다.

// #1. 코드가 실행되기 이전에 변수 c, 함수 d는 메모리에 등록된다.
// 그러므로 c의 값은 undefined 이다.
// 메모리에 등록되지 않는 변수를 호출 했을 때는 ReferenceError가 발생한다.

d(); // 함수 실행
console.log(c); // 변수 C 출력

var c = 'Center'; // 실행 컨텍스가 코드가 실행 되기 전에 메모리에 상주 되어 있다.

function d() {
  console.log('Exection d function');
}

// -----------------------------------------------------------------------------------------
// [검증 1] 변수 선언 이전에 연산을 수행해도 올바르게 작동될까?

// 변수 초기화
througn_the_message = '그가 마지막으로 전한 말은 ';

// 값 변경
througn_the_message += '"누구나 가는 길을 당신이 조금 앞서 가는 거야!" 였습니다.';

// 콘솔 출력
console.log(througn_the_message);

// 변수 선언 끌어오려진 것 처럼 보여서 '호이스팅' 라고 부른다.
var througn_the_message;



// 변수 선언 ⇒ 초기화(값 할당) ⇒ 변수 허용 영역(Scope) 설정

// 어디에 선언이 되어 있든, 변수들은 코드가 실행되기 전에 처리가 됩니다. 
// var로 선언된 변수의 범위는 현재 실행 컨텍스트인데, 그 컨텍스트를 둘러싼 함수, 
// 혹은 함수의 외부에 전역으로 선언된 변수가 될 수 있습니다.
// -----------------------------------------------------------------------------------------
// [검증 2.1] 함수 선언 이전에 함수를 실행할 경우 문제가 발생할까?

// 변수 선언
var headings = [
  '"향긋한 보약" 봄나물, 잘못 먹으면 자칫 식중독',
  '미세먼지 ‘반쪽 짜리’ 비상 조치…효과는 미미',
  '아파트 숲 서울에 \'16년간 0개\'…갈 길 먼 특수학교'
];
// 배열 아닌 변수 선언

var test = 10101;
// 함수 실행
getArrayLast(test);

// 함수 선언 - 배열의 마지막 원소를 뻬낸다. 배열이 아닐 경우 Error 발생.
function getArrayLast(data) {
  return  Array.isArray(data) ? data[data.length - 1] : new Error('전달된 데이터는 배열이 아닙니다.');

}



// [검증 2.2] 그렇다면 함수 표현식의 경우는 어떨까?

// code 80 번째 줄 - spliceArrayIndexCount is not a function
// 'is not a function Error'는 변수에 등록되어 있지만 값이 할당 된적이 없음을 의미힌다.
// 그 이유는 함수에 실행되는 참조 값이 변수 이므로 자바스크립트 엔진이 호이스팅을 하는 건
// 선언부만 이다. 즉, 값이 할당되는 초기화 과정은 끌어올리지 않으므로 현재 시점에서 
// spliceArrayIndexCount는 undefined이다. 함수가 아니다.

//변수 선언
var images = [
  { src: 'images/logo.png', alt: 'logo' },
  { src: 'images/icon.png', alt: 'book' },
  { src: 'images/button.png', alt: 'toggle' },
];

// 함수 실행 
// var filtered_images = spliceArrayIndexCount(images, 1);

// 콘솔 출력
// console.log(filtered_images);

// 함수 표현식 (변수에 참조)
var spliceArrayIndexCount = function (data, index, count) {
  if (Array.isArray(data) && typeof index === 'number') {
    count = count && count >= 0 ? count : data.length - index;
    console.log(count);
    return data.splice(index, count);
  } else {
    new Error('전달된 데이터는 배열이 아닙니다.');
  }
};

// -----------------------------------------------------------------------------------------
// [검증 3] 다음 코드의 실행 결과는 무엇인지 생각해보세요.

// 변수 초기화
hoist_is = [
  '컴파일 단계에서 메모리에 저장',
  '초기화가 아닌, 선언만 호이스트',
  'JavaScript에서 컨텍스트 실행이 작동하는 방식'
];


// 변수 초기화, 함수 실행
cloned_arr = copyArray(hoist_is);

// 콘솔 출력
console.log(cloned_arr);

// 함수 선언
function copyArray(data) {
  // 1. if문은 블록문으로써 let 키워드를 사용하지 않으면 영역을 생성하지 않는다.
  // 3.  undefined 된 값은 if문 에서 true로 값이 전환되서 코드가 정상 실행한다.
  if (!clone && Array.isArray(data)) {
    // 2. for 안에 있는 i, l, clone 변수는 영역을 최상위로 이동한다. 그러므로 값은  undefined된다.
    for (var clone = [], i = 0, l = data.length; i < l; ++i) {
      clone.push(data[i]);
    }
    return clone;
  } else {
    return [];
  }
}

// 변수 선언
var cloned_arr, hoist_is;



// -----------------------------------------------------------------------------------------
// 스코프 체이닝(Scope Chaining)
// - 스코프 체이닝이란?
//  Identifiers(식별자)를 찾는 일련의 과정을 말합니다.

// 함수 내에서 선언 되지 않는 변수를 사용할 경우
// 함수 내에서 그 변수를 찾는다 -> 매개변수에서 찾는다 -> 상위 영역으로 계속해서 이동한다 
// -> 변수가 없으면 참조 오류 발생 (쇠사슬 모양 처럼 올라간다해서 '스코프 체이닝' 이라고 한다.)

// #3. 함수 내에 함수를 중첩할 경우 거슬러 올라가기 때문에 성능관점에서 좋지는 않다. 
function a(d) {
  var x = d; // x = 10
  b(x + 10);

  function b(y) { // y = 20, b가 실행될때 x는 10 이므로 +10을 해서 20이 되는 것이다.
    c();

    function c() {
      var z = 3;
      console.log(x + y + z); // 10 + 20 + 3 = 33, y는 선언된 적이 없으므로 매개변수 값을 가져온다.
    }
  }
}

a(10);



// -----------------------------------------------------------------------------------------
// [결론] 코드를 어떻게 작성하면 좋을까?

// 변수 선언/초기화 및 함수 선언/표현식을 
// 영역(Scope)의 최상위에 작성하는 것을 권장합니다.
