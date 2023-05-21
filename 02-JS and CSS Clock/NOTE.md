因為hackMD有上傳檔案限制，所以精心製作的GIF放來這邊

1. 如何觀察問題

    現學現賣，為了觀察逆時針問題，結合`Date()`和`setInterval()`，寫了`echoSecDegree()`印出當前rotata角度，並將`transition`動畫拉長到1s，來觀察秒針異常抖動的變化

```javascript=
function echoSecDegree() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    console.log(`rotate(${secondDegree}deg)`);
}
```

    
2. 時針抖動效果
    
    指針的 `transition-timing-function` 屬性設定，可以透過貝茲曲線概念來客製化想要的指針走動效果，原始專案為ticktok效果，而在下面這段則可以呈現電子鐘 (持續平滑走動) 效果
    ```javascript
    transition-timing-function: linear
    ```