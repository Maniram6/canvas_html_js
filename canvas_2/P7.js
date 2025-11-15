const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// Resizing  page with canvas__________________________________________________________________________________
addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
  // init function to generate new random circles for every resizing.
});

// pac man game character moving and points(score) collecting ________________________________________________

// let x = 51;
// let dx = 14;
// let xCheck = 0;
// let xTry = 200;
// let n = 10;
// let score = 0;

// function staticCircle(n, xPosition) {
//   for (let i = 0; i < n; i++) {
//     c.font = "30px Arial";

//     c.fillText("Score is " + score, 550, 100);
//     c.beginPath();
//     c.arc(xPosition, 250, 5, 0, 2 * Math.PI);
//     c.strokeStyle = "blue";
//     c.fillStyle = "blue";
//     c.fill();
//     c.stroke();
//     xPosition += 100;
//   }
// }
// function Draw(startAngle, endAngle) {
//   c.beginPath();
//   c.arc(x, 250, 50, startAngle, endAngle, false);
//   //   c.lineWidth = 10;
//   c.lineTo(x, 250);
//   c.fillStyle = "red";
//   c.fill();

//   c.strokeStyle = "red";
//   c.stroke();
//   x += dx;
// }

// function pacmanMoving() {
//   setTimeout(() => {
//     requestAnimationFrame(pacmanMoving);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     if (xTry - x > 51) {
//       staticCircle(n, xTry);
//     } else {
//       n--;
//       xTry += 100;
//       score++;
//       staticCircle(n, xTry);
//     }

//     if (xCheck == 0) {
//       Draw((1 / 4) * Math.PI, (7 / 4) * Math.PI);
//       xCheck = 1;
//     } else {
//       Draw((5 / 180) * Math.PI, (355 / 180) * Math.PI);
//       xCheck = 0;
//     }
//   }, 150);
// }
// pacmanMoving();

// Creating and moving multiple circles in screen_____________________________________________________________
// Below md is correct but we are not functional programming (short and reusable code)________________________
// If we want more, we should copy and paste more circles_____________________________________________________
// Circle Three

// let staticCircleRadius1 = 2 + Math.random() * 48;
// let staticCircleXPosition1 =
//   staticCircleRadius1 +
//   1 +
//   Math.random() * (innerWidth - (staticCircleRadius1 * 2 + 2));
// let staticCircleYPosition1 =
//   staticCircleRadius1 +
//   1 +
//   Math.random() * (innerHeight - (staticCircleRadius1 * 2 + 2));

// let staticCircleDx1 = (Math.random() - 0.5) * 10;
// let staticCircleDy1 = (Math.random() - 0.5) * 10;
// function staticColor1() {
//   let startSymbol = "#";
//   let colorArr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol = startSymbol + colorArr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }
// let staticCircleColor1 = staticColor1();

// function staticCircle1() {
//   if (
//     staticCircleXPosition1 + staticCircleRadius1 > innerWidth ||
//     staticCircleXPosition1 - staticCircleRadius1 < 0
//   ) {
//     staticCircleDx1 = -staticCircleDx1;
//   }
//   if (
//     staticCircleYPosition1 + staticCircleRadius1 > innerHeight ||
//     staticCircleYPosition1 - staticCircleRadius1 < 0
//   ) {
//     staticCircleDy1 = -staticCircleDy1;
//   }

//   c.beginPath();
//   c.arc(
//     staticCircleXPosition1,
//     staticCircleYPosition1,
//     staticCircleRadius1,
//     0,
//     2 * Math.PI
//   );
//   c.strokeStyle = staticCircleColor1;
//   c.fillStyle = staticCircleColor1;
//   c.fill();
//   c.stroke();
//   staticCircleXPosition1 += staticCircleDx1;
//   staticCircleYPosition1 += staticCircleDy1;
// }
// // Circle Two

// let staticCircleRadius = 2 + Math.random() * 48;
// let staticCircleXPosition =
//   staticCircleRadius +
//   1 +
//   Math.random() * (innerWidth - (staticCircleRadius * 2 + 2));
// let staticCircleYPosition =
//   staticCircleRadius +
//   1 +
//   Math.random() * (innerHeight - (staticCircleRadius * 2 + 2));

// let staticCircleDx = (Math.random() - 0.5) * 10;
// let staticCircleDy = (Math.random() - 0.5) * 10;
// function staticColor() {
//   let startSymbol = "#";
//   let colorArr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol = startSymbol + colorArr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }
// let staticCircleColor = staticColor();

// function staticCircle() {
//   if (
//     staticCircleXPosition + staticCircleRadius > innerWidth ||
//     staticCircleXPosition - staticCircleRadius < 0
//   ) {
//     staticCircleDx = -staticCircleDx;
//   }
//   if (
//     staticCircleYPosition + staticCircleRadius > innerHeight ||
//     staticCircleYPosition - staticCircleRadius < 0
//   ) {
//     staticCircleDy = -staticCircleDy;
//   }

//   c.beginPath();
//   c.arc(
//     staticCircleXPosition,
//     staticCircleYPosition,
//     staticCircleRadius,
//     0,
//     2 * Math.PI
//   );
//   c.strokeStyle = staticCircleColor;
//   c.fillStyle = staticCircleColor;
//   c.fill();
//   c.stroke();
//   staticCircleXPosition += staticCircleDx;
//   staticCircleYPosition += staticCircleDy;
// }

// // Circle One

// let circleRadius = 2 + Math.random() * 48;
// let xPosition =
//   circleRadius + 1 + Math.random() * (innerWidth - (circleRadius * 2 + 2));
// let yPosition =
//   circleRadius + 1 + Math.random() * (innerHeight - (circleRadius * 2 + 2));

// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// function randomColor() {
//   let startSymbol = "#";
//   let colorArr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol = startSymbol + colorArr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }
// let circleColor = randomColor();

// function circleMoving() {
//   requestAnimationFrame(circleMoving);

//   c.clearRect(0, 0, innerWidth, innerHeight);
//   staticCircle();
//   staticCircle1();

//   if (xPosition + circleRadius > innerWidth || xPosition - circleRadius < 0) {
//     dx = -dx;
//   }
//   if (yPosition + circleRadius > innerHeight || yPosition - circleRadius < 0) {
//     dy = -dy;
//   }

//   c.beginPath();
//   c.arc(xPosition, yPosition, circleRadius, 0, 2 * Math.PI);
//   c.strokeStyle = circleColor;
//   c.fillStyle = circleColor;
//   c.fill();
//   c.stroke();
//   xPosition += dx;
//   yPosition += dy;
// }
// circleMoving();

// Creating and moving multiple circles in screen_____________________________________________________________
// Below md is best functional program________________________________________________________________________

// let numOfCircleNeed = 30;
// function Circle(x, y, dx, dy, r, color) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.r = r;
//   this.color = color;

//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     c.strokeStyle = this.color;
//     c.fillStyle = this.color;
//     c.fill();
//     c.stroke();
//     this.update();
//   };

//   this.update = function () {
//     if (this.x + this.r > innerWidth || this.x - this.r < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.r > innerHeight || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//   };
// }

// let circleArray = [];
// function init() {
//   circleArray = [];
//   for (let i = 0; i < numOfCircleNeed; i++) {
//     let r = 2 + Math.random() * 48;
//     let x = r + 1 + Math.random() * (innerWidth - (r * 2 + 2));
//     let y = r + 1 + Math.random() * (innerHeight - (r * 2 + 2));

//     let dx = (Math.random() - 0.5) * 10;
//     let dy = (Math.random() - 0.5) * 10;
//     function randomColor() {
//       let startSymbol = "#";
//       let Arr = "0123456789ABCDEF".split("");
//       for (let i = 0; i < 6; i++) {
//         startSymbol = startSymbol + Arr[Math.round(Math.random() * 15)];
//       }
//       return startSymbol;
//     }
//     let color = randomColor();
//     circleArray.push(new Circle(x, y, dx, dy, r, color));
//   }
// }
// init();

// function circleMoving() {
//   requestAnimationFrame(circleMoving);

//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < numOfCircleNeed; i++) {
//     circleArray[i].draw();
//   }
// }
// circleMoving();

// Interacting with Circles___________________________________________________________________________________

// let numOfCircleNeed = 100;
// let cursorX;
// let cursorY;

// let maxRadius = 60;

// function Circle(x, y, dx, dy, r, color) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.r = r;
//   this.minRadius = r;
//   this.color = color;

//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     c.strokeStyle = this.color;
//     c.fillStyle = this.color;
//     c.fill();
//     c.stroke();
//     this.update();
//   };

//   this.update = function () {
//     if (this.x + this.r > innerWidth || this.x - this.r < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.r > innerHeight || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }
//     if (
//       cursorX - this.x < 50 &&
//       cursorX - this.x > -50 &&
//       cursorY - this.y < 50 &&
//       cursorY - this.y > -50
//     ) {
//       if (this.r < maxRadius) {
//         this.r += 1;
//       }
//     } else if (this.r > this.minRadius) {
//       this.r -= 1;
//     }
//     this.x += this.dx;
//     this.y += this.dy;
//   };
// }

// let circleArray = [];
// function init() {
//   circleArray = [];
//   for (let i = 0; i < numOfCircleNeed; i++) {
//     let r = 2 + Math.random() * 10;
//     let x = r + 1 + Math.random() * (innerWidth - (r * 2 + 2));
//     let y = r + 1 + Math.random() * (innerHeight - (r * 2 + 2));

//     let dx = Math.random() - 0.5;
//     let dy = Math.random() - 0.5;
//     function randomColor() {
//       let startSymbol = "#";
//       let Arr = "0123456789ABCDEF".split("");
//       for (let i = 0; i < 6; i++) {
//         startSymbol = startSymbol + Arr[Math.round(Math.random() * 15)];
//       }
//       return startSymbol;
//     }
//     let color = randomColor();
//     circleArray.push(new Circle(x, y, dx, dy, r, color));
//   }
// }
// init();

// addEventListener("mousemove", function (e) {
//   cursorX = e.x;
//   cursorY = e.y;
// });

// function circleMoving() {
//   requestAnimationFrame(circleMoving);

//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < numOfCircleNeed; i++) {
//     circleArray[i].draw();
//   }
// }
// circleMoving();

// Mini-Task  Background change with touching circle________________________________________________________

let numOfCircleNeed = 100;
let cursorX;
let cursorY;

let maxRadius = 60;

function Circle(x, y, dx, dy, r, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.minRadius = r;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    this.update();
  };

  this.update = function () {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }
    if (
      cursorX - this.x < 50 &&
      cursorX - this.x > -50 &&
      cursorY - this.y < 50 &&
      cursorY - this.y > -50
    ) {
      if (this.r < maxRadius) {
        this.r += 1;
        if (this.color == Arr[0]) {
          canvas.style.backgroundColor = "blue";
        }
        if (this.color == Arr[1]) {
          canvas.style.backgroundColor = "white";
        }
        if (this.color == Arr[2]) {
          canvas.style.backgroundColor = "black";
        }
        if (this.color == Arr[3]) {
          canvas.style.backgroundColor = "red";
        }
        if (this.color == Arr[4]) {
          canvas.style.backgroundColor = "yellow";
        }
      }
    } else if (this.r > this.minRadius) {
      this.r -= 1;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

let circleArray = [];
let Arr = ["red", "black", "white", "blue", "green"];
function init() {
  circleArray = [];
  for (let i = 0; i < numOfCircleNeed; i++) {
    let r = 2 + Math.random() * 10;
    let x = r + 1 + Math.random() * (innerWidth - (r * 2 + 2));
    let y = r + 1 + Math.random() * (innerHeight - (r * 2 + 2));

    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;

    let color = Arr[Math.round(Math.random() * 4)];
    circleArray.push(new Circle(x, y, dx, dy, r, color));
  }
}
init();

addEventListener("mousemove", function (e) {
  cursorX = e.x;
  cursorY = e.y;
});

function circleMoving() {
  requestAnimationFrame(circleMoving);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < numOfCircleNeed; i++) {
    circleArray[i].draw();
  }
}
circleMoving();
