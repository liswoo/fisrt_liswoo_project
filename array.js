//array. 데이터의 그룹을 만드는데. 배열에 들어갈 수 있는 값은. 모든 값이다. 함수와 객체도 들어갈 수 있다..

let grade_1 = 'student'
let grade_2 = 'file'
let grade_3 = 'core'

let obj = {name: grade_1, name_2: grade_2, name_3: grade_3};
console.log(obj);

function digging (nb) {
    nb.grade_1 = 'teacher'
}
digging(obj);

let arr = [1,2,obj,digging];
console.log(arr);

//array에 있는 값 불러오기.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);