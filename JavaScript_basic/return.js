//return문. 함수가 아니다. 다만 함수 안에서 많이 쓰인다.

function getPoint () {
    return 10 * 5 ;
};

// retrun은 그 결과를 반환한다. 함수에서는 그 함수 자체 : getPoint()에 반환한다.
// 즉, 10곱하기 5의 값 50이, getPoint()에 들어간다는 소리다.

let result = getPoint(); // getPint()에 들어 있는 값 50을 result 변수에 넣어서

console.log(result); // 찍어보면 50을 뱉는 것을 알 수 있다.