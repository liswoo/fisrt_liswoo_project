//파라미터의 기술적 개념에 대해서. 한번 생각해보자.

// function () 여기서 ()안에 파라미터가 들어갈건데.
// 파라미터들을 부품으로 해서, 실행되는 함수를 조립한다.
// 파라미터는 애초에 그 값이 딱 정해져 있지 않기 때문에, 값  자체는
// 함수를 호출할때 받아온다. 그니까, 파라미터는 a랑 b고 , 함수는 a+b 인데
// 함수를 호출할때 a에 값을 2를 주고, b에 값을 1을 주는 함수를 호출할 수 있는 것!

function AplusB (a,b) {
    console.log(a+b);
};

AplusB(2,1);