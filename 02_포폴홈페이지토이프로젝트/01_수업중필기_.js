


console.log (document.querySelector('.text-wrap h2').getBoundingClientRect().top + window.pageYOffset);
    // 스크롤 만큼 빼면, 절대 좌표 나옴 

// 값 넣어두기
let posY = document.querySelector('.text-wrap h2').getBoundingClientRect().top + window.pageYOffset





window.onscroll = function() {
    // 스크롤 했을 때의 이벤트 
    console.log('스크롤 됨')

    // 윈도우 스크롤이 되면 값 찍히는거!
    console.log(window.scrollY)

    if(posY < window.scrollY) {
        document.querySelector('.header').classList.add('isActive');
    } else {
        document.querySelector('.header').classList.remove('isActive');
    }

}


