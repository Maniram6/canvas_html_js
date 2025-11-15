const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();

  // For second code
  // init("blue");
});

// Gravity multiple ball spawning______________________________________________________________________________
// To understand better, play with this code___________________________________________________________________

let maxLimitCircleSpawn = 5;
let Gravity = 3;
let friction = 0.9;

function randomColor() {
  let startSymbol = "#";
  let colorArr = "0123456789ABCDEF".split("");
  for (let i = 0; i < 6; i++) {
    startSymbol += colorArr[Math.round(Math.random() * 15)];
  }
  return startSymbol;
}

function CreateCircle(cursorX, cursorY, radius, xVelocity, yVelocity, color) {
  this.x = cursorX;
  this.y = cursorY;
  this.radius = radius;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.color = color;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.lineWidth = 2;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    this.update();
  };
  this.update = function () {
    if (this.y + this.radius + this.yVelocity + 1 > innerHeight) {
      this.yVelocity = -this.yVelocity * friction;
    } else {
      this.yVelocity += Gravity;
    }

    this.y += this.yVelocity;
  };
}

let particlesArr = [];
addEventListener("mousemove", function (e) {
  let cursorX = e.x;
  let cursorY = e.y;
  let xVelocity = (Math.random() - 0.5) * 3;
  let yVelocity = 0;
  let radius = Math.random() * 40;
  let color = randomColor();

  particlesArr.push(
    new CreateCircle(cursorX, cursorY, radius, xVelocity, yVelocity, color)
  );
  console.log(particlesArr);
});

function FreeFall() {
  requestAnimationFrame(FreeFall);
  c.clearRect(0, 0, innerWidth, innerHeight);
  if (particlesArr.length > maxLimitCircleSpawn) {
    particlesArr.shift();
  }

  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].draw();
  }
}
FreeFall();

// Simple collision Detection__________________________________________________________________________________

// let bigCircleRadius = 150;
// let smallCircleRadius = 40;
// init("blue");

// function init(color) {
//   c.beginPath();
//   c.arc(innerWidth / 2, innerHeight / 2, bigCircleRadius, 0, 2 * Math.PI);
//   c.strokeStyle = color;
//   c.fillStyle = color;
//   c.fill();
//   c.stroke();
// }

// addEventListener("mousemove", function (e) {
//   cursorX = e.x;
//   cursorY = e.y;
//   function circleMoving() {
//     requestAnimationFrame(circleMoving);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     init("blue");

//     c.beginPath();
//     c.arc(cursorX, cursorY, smallCircleRadius, 0, 2 * Math.PI);
//     c.strokeStyle = "red";
//     c.fillStyle = "red";
//     c.fill();
//     c.stroke();

//     if (
//       distanceCalculation(cursorX, innerWidth / 2, cursorY, innerHeight / 2) <
//       bigCircleRadius + smallCircleRadius
//     ) {
//       init("red");
//     }
//   }
//   circleMoving();
// });
// _________________________________________________________________________________________________________

// Using Pythagorus theorem for distance calculating
function distanceCalculation(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

// Simple collision in 1 Dimension ________________________________________________________________________

// let restCircleRadius = 50;
// let restCircleInitialX = innerWidth - restCircleRadius;
// let restCircleInitialY = innerHeight / 2;
// let velocityRest = -13;
// let mass1 = 20;

// let collide = 0;

// let movingCircleRadius = 50;
// let velocityMoving = 13;
// let xPosition = movingCircleRadius;
// let yPosition = innerHeight / 2;
// let mass2 = 20;

// init();

// function init() {
//   c.beginPath();
//   c.moveTo(0, restCircleInitialY + restCircleRadius);
//   c.lineTo(innerWidth, restCircleInitialY + restCircleRadius);
//   c.stroke();
//   c.closePath();
//   c.beginPath();
//   c.arc(
//     restCircleInitialX,
//     restCircleInitialY,
//     restCircleRadius,
//     0,
//     2 * Math.PI
//   );
//   c.strokeStyle = "red";
//   c.fillStyle = "red";
//   c.fill();
//   c.stroke();
//   c.closePath();
// }

// function collisionAnimation() {
//   requestAnimationFrame(collisionAnimation);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(xPosition, yPosition, movingCircleRadius, 0, 2 * Math.PI);
//   c.strokeStyle = "red";
//   c.fillStyle = "blue";
//   c.fill();
//   c.stroke();
//   c.closePath();

//   if (
//     distanceCalculation(
//       xPosition,
//       restCircleInitialX,
//       yPosition,
//       restCircleInitialY
//     ) <
//     restCircleRadius + movingCircleRadius + 1
//   ) {
//     temp = velocityRest;
//     velocityRest = velocityMoving;
//     velocityMoving = temp;
//   }
//   if (
//     xPosition + movingCircleRadius > innerWidth ||
//     xPosition - movingCircleRadius < 0
//   ) {
//     velocityMoving = -velocityMoving;
//   }
//   if (
//     restCircleInitialX + restCircleRadius > innerWidth ||
//     restCircleInitialX - restCircleRadius < 0
//   ) {
//     velocityRest = -velocityRest;
//   }

//   xPosition += velocityMoving;
//   restCircleInitialX += velocityRest;
//   init();
// }
// collisionAnimation();

// For collision/_____________________________________________________________________________________________

// Simple collision in three dimension________________________________________________________________________

// let numToGenerate = 100;

// function randomColor() {
//   let startSymbol = "#";
//   let colorArr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol += colorArr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }

// function Collision(x, y, r, dx, dy, color) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.r = r;
//   this.color = color;

//   this.update = function () {
//     if (this.x + this.r > innerWidth || this.x - this.r < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.r > innerHeight || this.y - this.r < 0) {
//       this.dy = -this.dy;
//     }

//     for (let i = 0; i < circlesArr.length; i++) {
//       if (this === circlesArr[i]) continue;
//       if (
//         distanceCalculation(this.x, circlesArr[i].x, this.y, circlesArr[i].y) <=
//         this.r + circlesArr[i].r + 2
//       ) {
//         console.log("collides");
//         const a = this.dx;
//         const b = this.dy;
//         this.dx = circlesArr[i].dx;
//         this.dy = circlesArr[i].dy;
//         circlesArr[i].dx = a;
//         circlesArr[i].dy = b;
//       }
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//   };
//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     c.lineWidth = 1;
//     c.fillStyle = color;
//     c.fill();
//     c.strokeStyle = color;
//     c.stroke();

//     this.update();
//   };
// }

// let circlesArr = [];

// function init() {
//   circlesArr = [];
//   for (let i = 0; i < numToGenerate; i++) {
//     // let r = Math.random() * 40;
//     let r = 25;
//     let x = r + 1 + Math.random() * (innerWidth - r * 2 - 2);
//     let y = r + 1 + Math.random() * (innerHeight - r * 2 - 2);
//     let dx = (Math.random() - 0.5) * 5;
//     let dy = (Math.random() - 0.5) * 5;
//     let color = randomColor();

//     if (i !== 0) {
//       for (let j = 0; j < circlesArr.length; j++) {
//         if (
//           distanceCalculation(x, circlesArr[j].x, y, circlesArr[j].y) <
//           r + circlesArr[j].r
//         ) {
//           x = r + 1 + Math.random() * (innerWidth - r * 2 - 2);
//           y = r + 1 + Math.random() * (innerHeight - r * 2 - 2);

//           j = -1;
//         }
//       }
//     }

//     circlesArr.push(new Collision(x, y, r, dx, dy, color));
//   }
// }
// init();
// function Test() {
//   requestAnimationFrame(Test);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   for (let i = 0; i < circlesArr.length; i++) {
//     circlesArr[i].draw();
//   }
// }
// Test();
