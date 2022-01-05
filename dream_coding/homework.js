// 1. 버튼을 누르면
// 2. div class pop..이 display block 된다.



function popup(status, write) {
    document.getElementById('popup').style.display = status;
    document.getElementById('name').innerHTML = write;
};

// function closebox (status) {
//     document.getElementById('popup').style.display = status;
// };

// let closebox = (status) => document.getElementById('popup').style.display = status;



// 1. 이벤트 리스너
// 2. addEventListener

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('over').addEventListener('mouseover', function(){
    document.getElementById('popup_2').style.display = 'none';
});

document.getElementById('over').addEventListener('mouseleave', function(){
    document.getElementById('popup_2').style.display = 'block';
});



