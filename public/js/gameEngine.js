/**
 * Oomphagotchi Game Engine
 */

function Game() {
    var canvas, ctx, height, width, handle;

    this.init = function(iWidth, iHeight) {
        canvas = document.getElementById('game');
        ctx = canvas.getContext('2d');

        width = iWidth;
        height = iHeight;

        idle(width, height);
    };

    var idle = function(pWidth, pHeight) {
        if (pWidth === width + 5) {
            pWidth = width;
        }

        if (pHeight === height + 5) {
            pHeight = height;
        }

        drawPet(pWidth, pHeight);

        pWidth++;
        pHeight++;

        eyes('idle', pWidth, pHeight);
        mouth('idle', pWidth, pHeight);

        handle = setTimeout(idle, 200, pWidth, pHeight);
    };

    var sleep = function(pWidth, pHeight) {
        if (pWidth === width + 5) {
            pWidth = width;
        }

        if (pHeight === height + 5) {
            pHeight = height;
        }

        drawPet(pWidth, pHeight);

        pWidth++;
        pHeight++;

        eyes('sleep', pWidth, pHeight);
        mouth('idle', pWidth, pHeight);

        handle = setTimeout(sleep, 500, pWidth, pHeight);
    };

    var entertain = function(pWidth, pHeight) {
        drawPet(pWidth, pHeight);

        eyes('happy', pWidth, pHeight);
        mouth('happy', pWidth, pHeight);

        setTimeout(function() {
            clearTimeout(handle);
            idle(width, height);
        }, 2000);
    };

    var panic = function(pWidth, pHeight) {
        if (pWidth === width + 20) {
            pWidth = width;
        }

        if (pHeight === height + 20) {
            pHeight = height;
        }

        drawPet(pWidth, pHeight);

        pWidth++;
        pHeight++;

        eyes('sleep', pWidth, pHeight);
        mouth('eat', pWidth, pHeight);

        handle = setTimeout(panic, 0, pWidth, pHeight);
    };

    var eat = function(pWidth, pHeight, foodPos) {
        if (foodPos > 300) {
            document.getElementById('food').style.marginLeft = '-100px';
            clearTimeout(handle);
            entertain(width, height);
            return;
        }

        drawPet(pWidth, pHeight);

        foodPos++;
        document.getElementById('food').style.marginLeft = foodPos + 'px';

        eyes('eat', pWidth, pHeight);
        mouth('eat', pWidth, pHeight);

        handle = setTimeout(eat, 0, pWidth, pHeight, foodPos);
    };

    var drawPet = function(width, height) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';

        // ctx.fillRect(canvas.width / 2 - width / 2, (canvas.height - height) / 2, width, height);

        // top
        ctx.fillRect((canvas.width / 2 - width / 2) + 20, (canvas.height - height) / 2, width - 40, 10);
        // top corners
        ctx.fillRect((canvas.width / 2 - width / 2) + 10, (canvas.height - height) / 2 + 10, 20, 10);
        ctx.fillRect((canvas.width / 2 + width / 2) - 30, (canvas.height - height) / 2 + 10, 20, 10);
        // sides
        ctx.fillRect((canvas.width / 2 - width / 2), (canvas.height - height) / 2 + 20, 20, height - 60);
        ctx.fillRect((canvas.width / 2 + width / 2) - 20, (canvas.height - height) / 2 + 20, 20, height - 60);
        // bottom corners
        ctx.fillRect((canvas.width / 2 - width / 2) + 10, (canvas.height - height) / 2 + height - 40, 20, 10);
        ctx.fillRect((canvas.width / 2 + width / 2) - 30, (canvas.height - height) / 2 + height - 40, 20, 10);
        // bottom
        ctx.fillRect((canvas.width / 2 - width / 2) + 20, (canvas.height - height) / 2 + height - 30, width - 40, 10);
    };

    var eyes = function(state, width, height) {
        switch (state) {
            case 'idle':
                var xLeft = (canvas.width / 2 - width / 2) + (width / 2 / 2);
                var yLeft = (canvas.height - height) / 2 + height / 2 / 2;
                var wLeft = 15;
                var hLeft = 40;

                var xRight = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 15;
                var yRight = (canvas.height - height) / 2 + height / 2 / 2;
                var wRight = 15;
                var hRight = 40;

                // left eye
                ctx.fillRect(xLeft, yLeft, wLeft, hLeft);

                // right eye 
                ctx.fillRect(xRight, yRight, wRight, hRight);
            break;

            case 'happy':
                var xLeft1 = (canvas.width / 2 - width / 2) + (width / 2 / 2);
                var yLeft1 = (canvas.height - height) / 2 + height / 2 / 2;
                var wLeft1 = 10;
                var hLeft1 = 10;

                var xLeft2 = (canvas.width / 2 - width / 2) + (width / 2 / 2) - 10;
                var yLeft2 = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wLeft2 = 10;
                var hLeft2 = 10;

                var xLeft3 = (canvas.width / 2 - width / 2) + (width / 2 / 2) - 15;
                var yLeft3 = (canvas.height - height) / 2 + height / 2 / 2 + 20;
                var wLeft3 = 10;
                var hLeft3 = 10;

                var xLeft4 = (canvas.width / 2 - width / 2) + (width / 2 / 2) - 20;
                var yLeft4 = (canvas.height - height) / 2 + height / 2 / 2 + 30;
                var wLeft4 = 10;
                var hLeft4 = 10;

                var xLeft5 = (canvas.width / 2 - width / 2) + (width / 2 / 2) + 10;
                var yLeft5 = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wLeft5 = 10;
                var hLeft5 = 10;

                var xLeft6 = (canvas.width / 2 - width / 2) + (width / 2 / 2) + 15;
                var yLeft6 = (canvas.height - height) / 2 + height / 2 / 2 + 20;
                var wLeft6 = 10;
                var hLeft6 = 10;

                var xLeft7 = (canvas.width / 2 - width / 2) + (width / 2 / 2) + 20;
                var yLeft7 = (canvas.height - height) / 2 + height / 2 / 2 + 30;
                var wLeft7 = 10;
                var hLeft7 = 10;

                var xRight1 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 25;
                var yRight1 = (canvas.height - height) / 2 + height / 2 / 2;
                var wRight1 = 10;
                var hRight1 = 10;

                var xRight2 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 35;
                var yRight2 = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wRight2 = 10;
                var hRight2 = 10;

                var xRight3 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 40;
                var yRight3 = (canvas.height - height) / 2 + height / 2 / 2 + 20;
                var wRight3 = 10;
                var hRight3 = 10;

                var xRight4 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 45;
                var yRight4 = (canvas.height - height) / 2 + height / 2 / 2 + 30;
                var wRight4 = 10;
                var hRight4 = 10;

                var xRight5 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 15;
                var yRight5 = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wRight5 = 10;
                var hRight5 = 10;

                var xRight6 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 10;
                var yRight6 = (canvas.height - height) / 2 + height / 2 / 2 + 20;
                var wRight6 = 10;
                var hRight6 = 10;

                var xRight7 = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 5;
                var yRight7 = (canvas.height - height) / 2 + height / 2 / 2 + 30;
                var wRight7 = 10;
                var hRight7 = 10;

                // left eye
                ctx.fillRect(xLeft1, yLeft1, wLeft1, hLeft1);
                ctx.fillRect(xLeft2, yLeft2, wLeft2, hLeft2);
                ctx.fillRect(xLeft3, yLeft3, wLeft3, hLeft3);
                ctx.fillRect(xLeft4, yLeft4, wLeft4, hLeft4);
                ctx.fillRect(xLeft5, yLeft5, wLeft5, hLeft5);
                ctx.fillRect(xLeft6, yLeft6, wLeft6, hLeft6);
                ctx.fillRect(xLeft7, yLeft7, wLeft7, hLeft7);

                // right eye 
                ctx.fillRect(xRight1, yRight1, wRight1, hRight1);
                ctx.fillRect(xRight2, yRight2, wRight2, hRight2);
                ctx.fillRect(xRight3, yRight3, wRight3, hRight3);
                ctx.fillRect(xRight4, yRight4, wRight4, hRight4);
                ctx.fillRect(xRight5, yRight5, wRight5, hRight5);
                ctx.fillRect(xRight6, yRight6, wRight6, hRight6);
                ctx.fillRect(xRight7, yRight7, wRight7, hRight7);
            break;

            case 'sleep':
                var xLeft = (canvas.width / 2 - width / 2) + (width / 2 / 2) - 20;
                var yLeft = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wLeft = 40;
                var hLeft = 10;

                var xRight = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 35;
                var yRight = (canvas.height - height) / 2 + height / 2 / 2 + 10;
                var wRight = 40;
                var hRight = 10;

                // left eye
                ctx.fillRect(xLeft, yLeft, wLeft, hLeft);

                // right eye 
                ctx.fillRect(xRight, yRight, wRight, hRight);
            break;

            case 'annoy':
                var xLeft = (canvas.width / 2 - width / 2) + (width / 2 / 2);
                var yLeft = (canvas.height - height) / 2 + height / 2 / 2;
                var wLeft = 15;
                var hLeft = 20;

                var xRight = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 15;
                var yRight = (canvas.height - height) / 2 + height / 2 / 2;
                var wRight = 15;
                var hRight = 20;

                // left eye
                ctx.fillRect(xLeft, yLeft, wLeft, hLeft);

                // right eye 
                ctx.fillRect(xRight, yRight, wRight, hRight);
            break;

            case 'eat':
                var xLeft = (canvas.width / 2 - width / 2) + (width / 2 / 2);
                var yLeft = (canvas.height - height) / 2 + height / 2 / 2;
                var wLeft = 20;
                var hLeft = 10;

                var xRight = (canvas.width / 2 + width / 2) - (width / 2 / 2) - 15;
                var yRight = (canvas.height - height) / 2 + height / 2 / 2;
                var wRight = 20;
                var hRight = 10;

                // left eye
                ctx.fillRect(xLeft, yLeft, wLeft, hLeft);

                // right eye 
                ctx.fillRect(xRight, yRight, wRight, hRight);
            break;
        } 
    };

    var mouth = function(state, width, height) {
        switch (state) {
            case 'idle':
                var x = (canvas.width / 2 - width / 2) + (width / 2 / 1.5);
                var y = (canvas.height - height) / 2 + height / 1.6;
                var w = width / 3;
                var h = 10;

                ctx.fillRect(x, y, w, h);
            break;

            case 'happy':
                var x = (canvas.width / 2 - width / 2) + (width / 2 / 1.5);
                var y = (canvas.height - height) / 2 + height / 1.6;
                var w = width / 4;
                var h = 10;

                ctx.fillRect(x, y, w, h);
            break;

            case 'annoy':
                var x = (canvas.width / 2 - width / 2) + (width / 2 / 1.3);
                var y = (canvas.height - height) / 2 + height / 2.2;
                var w = width / 4;
                var h = 10;

                ctx.fillRect(x, y, w, h);
            break;

            case 'eat':
                var x1 = (canvas.width / 2 - width / 2) + (width / 2 / 1.3);
                var y1 = (canvas.height - height) / 2 + height / 2;
                var w1 = width / 4;
                var h1 = 10;

                var x2 = (canvas.width / 2 - width / 2) + (width / 2 / 1.3);
                var y2 = (canvas.height - height) / 2 + height / 2 + 50;
                var w2 = width / 4;
                var h2 = 10;

                var x3 = (canvas.width / 2 - width / 2) + (width / 2) + 40;
                var y3 = (canvas.height - height) / 2 + height / 2;
                var w3 = 10;
                var h3 = 50;

                ctx.fillRect(x1, y1, w1, h1);
                ctx.fillRect(x2, y2, w2, h2);
                ctx.fillRect(x3, y3, w3, h3);
            break;
        }
    };

    this.changeState = function(state) {
        if (handle !== null) {
            clearTimeout(handle);
        } 

        switch (state) {
            case 'idle':
                idle(width, height);
            break;

            case 'sleep':
                sleep(width, height);

                setTimeout(function() {
                    clearTimeout(handle);
                    idle(width, height);
                }, 10000);
            break;

            case 'entertain':
                entertain(width, height);
            break;

            case 'eat': 
                var food = [
                    'beer', 'pizza', 'hamburger', 'fries', 'poultry_leg', 'fried_shrimp', 'doughnut', 'ice_cream', 'cake', 'cookie', 'candy', 'watermelon', 'banana', 'apple'
                ];
                var choice = food[Math.floor(Math.random() * food.length)];
                document.getElementById('food').innerHTML = '<i class="twa twa-' + choice + '"></i>';

                eat(width, height, -100);
            break;

            case 'panic':
                panic(width, height);

                setTimeout(function() {
                    clearTimeout(handle);
                    idle(width, height);
                }, 5000);
            break;
        }
    }
}