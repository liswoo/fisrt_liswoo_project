'use strict';

class info {
    constructor (birth,id) {
        this.id = birth + '_' + id;
    }
}

const userid = new info(880604,'woolis');
console.log(userid);

//prototype. like 유전자. calss가 직접 상속하는 개념이라면, prototype은 선택하여 가져다 쓸 수 있는 장치.
//부모 클래스에서 prototype 에 값을 넣어 놓고, 자식이 . 으로 그 값을 가져와 출력할 수 있다.
// https://www.youtube.com/watch?v=wUgmzvExL_E


