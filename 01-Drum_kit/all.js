function removeTransition(e){
    if(e.propertyName != 'transform')
        return;
    //e.target 代表觸發 transitionend 事件的元素，相當於this
    e.target.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    
    //讓音效能不間斷送出，將currentTime設為0
    audio.currentTime = 0;
    
    //播放音效
    audio.play();
    
    //對應的key元素要加上播放特效
    key.classList.add("playing");
}
window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));