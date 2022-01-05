// 1.상속..이니까 우선 클래스를 만들고
// 2.클래스의 prototype에 값을 넣어 놓고
// 3.파라미터에 값을 넣어, instance를 만든 뒤에,
// 4.인스턴스에서 부모 prototype에서 상속받을 값을 가져와본다.

class 인스턴스기계 {
    constructor (a,b) {
        this.firstnumber =  a;
        this.secondnumber = b;
    }
}

let cal = new 인스턴스기계(2,4);
console.log(cal);

let cal_2 = new 인스턴스기계 (3,5);
console.log(cal_2);

console.log(인스턴스기계.prototype);

let fa = () => console.log('안녕하세요?')

인스턴스기계.prototype.hi = fa;

console.log(cal.hi);








