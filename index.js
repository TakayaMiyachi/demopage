const nav = document.getElementById('js_headerNav');
const hum = document.getElementById('js_headerHum');
hum.addEventListener('click', function() {
  nav.classList.toggle("clicked");
  hum.classList.toggle("clicked");
}, false);

let targets = document.querySelectorAll('.js_scroll_fall'); //アニメーションさせたい要素
//スクロールイベント
window.addEventListener('scroll', function () {
  const scroll = window.scrollY; //スクロール量を取得
  const windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    let targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is_animated'); //is-animatedクラスを加える
    }
  }
});

const header = document.querySelectorAll('.ly_header');
window.onload = function() {
  const scroll = window.scrollY; //スクロール量を取得
  if(scroll === 0) {
    header[0].style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

window.addEventListener('scroll', function () {
  const scroll = window.scrollY; //スクロール量を取得
  const mainV = document.querySelector('.bl_mainV').clientHeight;
  if(scroll === 0) {
    header[0].style.backgroundColor = 'rgba(0,0,0,0)';
  } else if(scroll < mainV) {
    header[0].style.backgroundColor = 'rgba(0,0,0,.5)';
  } else if(scroll >= mainV) {
    header[0].style.backgroundColor = '#444';
  }
});