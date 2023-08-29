const canvas = document.getElementById('canvas');
const ratio = window.devicePixelRatio || 1;

const walk_01 = document.getElementById('walk_01');
const walk_02 = document.getElementById('walk_02');
const walk_03 = document.getElementById('walk_03');
const peak_01 = document.getElementById('peak_01');

let w = 600;
let h = 600;
// canvas.width = w; // 实际渲染像素
// canvas.height = h // 实际渲染像素
canvas.width = w * ratio; // 实际渲染像素
canvas.height = h * ratio; // 实际渲染像素
canvas.style.width = `${w}px`; // 控制显示大小
canvas.style.height = `${h}px`; // 控制显示大小

const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false; // 禁用平滑处理

const numSteps = 5000;  // 游走步数
const stepSize = 5;     // 步长
const delay = 1;     // 每步之间的延迟（1秒）

let timeoutId;

let x = canvas.width / 2;
let y = canvas.height / 2;
let step = 0;

function reset(dx, dy) {
    x = dx || canvas.width / 2;
    y = dy || canvas.height / 2;
    step = 0;
}

walk_01.addEventListener('click', function () {
    // 清除 Canvas 内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reset();
    clearTimeout(timeoutId);
    drawRandomWalk();
});

walk_02.addEventListener('click', function () {
    // 清除 Canvas 内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reset();
    clearTimeout(timeoutId);
    drawRandomWalk_1();
});

walk_03.addEventListener('click', function () {
    // 清除 Canvas 内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reset();
    clearTimeout(timeoutId);
    drawRandomWalk_2();
});

peak_01.addEventListener('click', function () {
    // 清除 Canvas 内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    reset(0);
    x = 0;
    clearTimeout(timeoutId);
    drawRandomPeak();
});

function drawRandomWalk() {
    if (step < numSteps) {
        ctx.beginPath();
        ctx.moveTo(x, y);

        // 随机选择一个方向
        const angle = Math.random() * 2 * Math.PI;
        x += Math.round(stepSize * Math.cos(angle));
        y += Math.round(stepSize * Math.sin(angle));

        // 绘制线段
        ctx.lineTo(x, y);
        ctx.stroke();

        step++;

        // 使用setTimeout来实现动画效果
        timeoutId = setTimeout(drawRandomWalk, delay);
    }
}

function drawRandomWalk_1() {
    if (step < numSteps) {
        ctx.beginPath();
        ctx.moveTo(x, y);

        // 随机选择一个方向
        const angle = Math.random() * 2 * Math.PI;
        if (Math.random() < 0.99) {
            x += Math.round(Math.random() * stepSize * Math.cos(angle));
            y += Math.round(Math.random() * stepSize * Math.sin(angle));
        } else {
            x += Math.round(100 * Math.random() * Math.cos(angle));
            y += Math.round(100 * Math.random() * Math.sin(angle));
        }


        // 绘制线段
        ctx.lineTo(x, y);
        ctx.stroke();

        step++;

        // 使用setTimeout来实现动画效果
        timeoutId = setTimeout(drawRandomWalk_1, delay);
    }
}

function drawRandomWalk_2() {
    if (step < numSteps) {
        ctx.beginPath();
        ctx.moveTo(x, y);

        if (Math.random() < 0.5) {
            if(Math.random() <0.5){
                x += stepSize;
            }else{
                x -= stepSize;
            }
        } else if(Math.random() <0.5) {
            y += stepSize;
        }else{
            y -= stepSize;
        }


        // 绘制线段
        ctx.lineTo(x, y);
        ctx.stroke();

        step++;

        // 使用setTimeout来实现动画效果
        timeoutId = setTimeout(drawRandomWalk_2, delay);
    }
}

function drawRandomPeak(){
    if (step < numSteps) {
        ctx.beginPath();
        ctx.moveTo(x, y);

        // 随机选择一个方向
        const angle = Math.max(0, Math.random() + 0.4) * 2 * Math.PI;
        x += 0.1;
        if (Math.random() < 0.99) {
            y -= Math.round(Math.random() * stepSize * Math.sin(angle));
        } else {
            y -= Math.round(100 * Math.random() * Math.sin(angle));
        }


        // 绘制线段
        ctx.lineTo(x, y);
        ctx.stroke();

        step++;
        
        // 使用setTimeout来实现动画效果
        timeoutId = setTimeout(drawRandomPeak, delay);
    }
}