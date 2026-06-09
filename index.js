let lunbo = document.querySelector('.lunbo');
let imgWrap = document.querySelector('.lunbo-img');
let dotsWrap = document.querySelector('.dot-box');
let imgNum = 9;
let index = 0;
let timer;

//生成圆点
for(let i=0;i<imgNum;i++){
  let span = document.createElement('span');
  i===0&&span.classList.add('active');
  dotsWrap.appendChild(span);
}
let dots = dotsWrap.querySelectorAll('span');

//切换图片
function change(){
  imgWrap.style.transform = `translateX(-${index*(100/imgNum)}%)`;
  dots.forEach(item=>item.classList.remove('active'));
  dots[index].classList.add('active');
}
//3秒自动轮播
function autoPlay(){
  timer = setInterval(()=>{
    index = (index+1)%imgNum;
    change();
  },3000);
}
autoPlay();
//悬停暂停
lunbo.onmouseenter = ()=>clearInterval(timer);
lunbo.onmouseleave = ()=>autoPlay();
// 点击圆点跳转
dots.forEach((item,i)=>{
  item.onclick = ()=>{
    index = i;
    change();
  }
})