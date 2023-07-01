window.onload = function() {
    let textArray = ["游雲XXIX"]; // 你可以添加你想要的任意多的文字
    let numOfLines = Math.floor(window.innerHeight / 30); // 计算可以在屏幕上放多少行文字

    // 每行的文本将填满整个屏幕
    let screenWidth = window.innerWidth;
    let fillText = [];

    // 为每行生成足够的文本，以填满整个屏幕
    for(let j = 0; j < textArray.length; j++) {
        let repeatedText = textArray[j];
        while(repeatedText.length * 8 < screenWidth) { // 这里的8是每个字符的平均像素宽度，这个数字可能需要根据你的具体情况进行调整
            repeatedText += " " + textArray[j];
        }
        fillText[j] = repeatedText;
    }

    for (let i = 0; i < numOfLines; i++) {
        let marquee = document.createElement("div"); // 创建一个新的div元素
        marquee.classList.add("marquee"); // 给这个元素添加"marquee"类
        marquee.classList.add(i % 2 == 0 ? "odd" : "even"); // 根据行号决定是添加"odd"类还是"even"类
        marquee.innerText = fillText[i % fillText.length]; // 设置这个元素的文字
        let top = (i * 30) + "px"; // 计算这个元素的垂直位置
        marquee.style.top = top;
        let textLength = marquee.innerText.length;
        let duration = textLength * 0.4; // 计算动画的持续时间
        marquee.style.animationDuration = duration + "s";
        document.body.appendChild(marquee); // 将这个元素添加到页面上
    }
}
