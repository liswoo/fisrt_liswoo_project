function print (){
    console.log('123');
};
print();

let a = print; // 변수에 함수를 할당할 때는, 함수 이름만 가져온다. () 가져오지 않는다.

a();

//에로우 함수.
const varname = () => console.log('right? so print this.')
varname ();

let call_mymom = () => document.write('hey!!!!')

