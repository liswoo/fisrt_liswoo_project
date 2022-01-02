// let value;
// value = ball;

// 위의 코드를 실행하면 에러를 발생시킨다. 에러가 발생되는 상황이 와도, 프로그램을 죽이지 않고 표현하기 위해 try-catch를 사용한다.
// 아래.

// let go_ahead;
// try {
//     go_ahead = ball;  // 오류가 나는 코드
// } catch (error) {
//     console.log("catch 실행") // 오류가 났을때 띄우는 코드.
// };

let go_ahead;
// let ball = 2;
try {
    go_ahead = ball; // 오류가 나는 코드
} catch (err) {
    console.log("오류입니다.") // 오류가 났을때 띄우는 코드.
} finally {
    console.log("감사합니다.") // 오류가 나던 안나던 띄우는 코드.
}
