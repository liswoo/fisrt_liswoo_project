// 인스턴스는, 생성자 함수로 찍어내듯이 만드는, 객체 이다.
// 인스턴스는, 결국 원본으로부터 복사해서 만든 객체 이다.
// 원본으로부터 복사될 때, 원본의 prototype에 해당하는 객체만 복사된다.
// 그 이외의 것들은 원본으로부터 복사되지 않는다.

// let a = {name:'woolis'};
// console.log(a['name']);
// console.log(a.name);
// console.log(a);

// var obj  = new Number(123);
// console.log(obj);

var obj = new Number("123"); // obj에 Number 인스턴스를 생성.
console.log(obj);
console.log(obj.valueOf()); // obj의 프리미티브 값 반환. Number 인스턴스의 프리미티브 값 반환.








