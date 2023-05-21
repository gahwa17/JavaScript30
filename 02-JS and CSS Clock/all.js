const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

var secondDegree = 0 , minDegree = 0 , hourDegree = 0;

function initData(){
    // Date()只初始化一次，取得第一次的時間後，之後採用累計方式換算角度，而非不斷取得新的時間
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    secondDegree = ((second / 60) * 360) + 90;
    minDegree = ((minute / 60) * 360) + ((second / 60) / 60) * 360 + 90;
    hourDegree = (hour / 12) * 360 + ((minute / 60) / 12) * 360 + (((second / 60) / 60) / 12) * 360 + 90;
}


function updateDate(){
    // 每過1秒，秒/分/時針加上各自往前走1格的度數
    secondDegree += ((1 / 60) * 360);
    minDegree += ((1 / 60 / 60) * 360);
    hourDegree += ((1 / 60 / 60) * 12);

    secondHand.style.transform = `rotate(${secondDegree}deg`;
    minsHand.style.transform = `rotate(${minDegree}deg`;
    hourHand.style.transform = `rotate(${hourDegree}deg`;
}


initData();
setInterval(updateDate, 1000);


/*Test code
function echoSecDegree() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    console.log(`rotate(${secondDegree}deg)`);
}
*/

/*解法一: 將duration設為0秒，相當於取消掉動畫效果，立即歸零回整點，避免444度到90度的異常動畫
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    
    // console.log(`現在時間是: ${hour}點${minute}分${second}秒`);
    
    const secondDegree = ((second / 60) * 360) + 90;
    const minDegree = ((minute / 60) * 360) + 90;
    const hourDegree = ((hour / 12) * 360) + 90;
 
    // if(secondDegree == 90){
    //     secondHand.style.transition = `all 0s`;
    // }
    
    secondHand.style.transform = `rotate(${secondDegree}deg`;
    minsHand.style.transform = `rotate(${minDegree}deg`;
    hourHand.style.transform = `rotate(${hourDegree}deg`;
};

setInterval(echoSecDegree, 1000);
setInterval(setDate, 1000);
*/