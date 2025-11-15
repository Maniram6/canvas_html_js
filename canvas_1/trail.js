let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// For allowing 2d functionality and shapes________________________________________________________________

let c = canvas.getContext("2d");

// For polygons, here taken rectangle__________________________________________________________________________

// c.fillRect(100, 100, 200, 100);
// c.fillStyle = "red";

// For lines and jioning them____________________________________________________________________________

// c.beginPath();
// c.moveTo(300, 100);
// c.lineTo(500, 100);
// c.lineTo(400, 200);
// c.lineTo(300, 100);
// c.strokeStyle = "blue";
// c.stroke();

// For circles and arcs (circles)_________________________________________________________________________

// c.beginPath();
// c.arc(200, 450, 50, 0, 2 * Math.PI, false);
// c.stroke();

// Learn how to change angles to radians (arcs)_____________________________________________________________

// c.beginPath();
// c.arc(600, 450, 50, 0, (5 / 8) * Math.PI, true);
// c.stroke();

// Just a shape of arc of circles_______________________________________________________________________

// let a = 200,
//   b = 50;
// for (let i = 0; i < 40; i++) {
//   c.beginPath();
//   c.arc(a, 300, b, (7 / 4) * Math.PI, (1 / 4) * Math.PI, false);
//   c.strokeStyle = "red";
//   c.stroke();
//   a = a + 10;
//   b = b + 5;
// }

// Creating circle with Random position,radius and color___________________________________________________

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let r = Math.random() * 100;
// function randomColor() {
//   let startSymbol = "#";
//   let arr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol = startSymbol + arr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }
// let color = randomColor();
// c.beginPath();
// c.arc(x, y, r, 0, Math.PI * 2, false);
// c.strokeStyle = color;
// c.fillStyle = color;
// c.fill();
// c.stroke();

// Creating multiple circles(arcs) **Simple method__________________________________________________________


// let numOfCircles = 9;
//  let x = 200;
//  for (let i = 0; i < numOfCircles; i++) {
//    c.beginPath();
//    c.arc(x, 200, 80, 0, 2 * Math.PI, false);
//    c.stroke();
//    x += 50;
//  }


// create and moving circle randomly at mouse click position_______________________________________________

// let cursorX;
// let cursorY;
// addEventListener("click", function (e) {
//   cursorX = e.pageX;
//   cursorY = e.pageY;
//   const radius = Math.random() * 70;
//   let x = cursorX;
//   let y = cursorY;
//   let dx = (Math.random() - 0.5) * 10;
//   let dy = (Math.random() - 0.5) * 10;
//   function randomColor() {
//     let startSymbol = "#";
//     let arr = "0123456789ABCDEF".split("");
//     for (let i = 0; i < 6; i++) {
//       startSymbol = startSymbol + arr[Math.round(Math.random() * 15)];
//     }
//     return startSymbol;
//   }
//   const color = randomColor();

//   function createCircle() {
//     requestAnimationFrame(createCircle);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     if (x + radius > innerWidth || x - radius < 0) {
//       dx = -dx;
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//       dy = -dy;
//     }
//     c.beginPath();
//     c.arc(x, y, radius, 0, 2 * Math.PI);
//     c.strokeStyle = color;
//     c.fillRect = color;
//     c.fill();
//     c.stroke();

//     x += dx;
//     y += dy;
//   }

//   createCircle();
// });

// creating circle and moving in the mouse drag position_____________________________________________________


// let cursorX;
//  let cursorY;
//  addEventListener("click", function () {
//    addEventListener("mousemove", function (e) {
//      cursorX = e.pageX;
//      cursorY = e.pageY;
//      c.clearRect(0, 0, innerWidth, innerHeight);
//      c.beginPath();
//      c.arc(cursorX, cursorY, 50, 0, 2 * Math.PI);
//      c.strokeStyle = "red";
//      c.fillStyle = "red";
//      c.fill();
//      c.stroke();
//    });
//  });


// Moving random circle after loading _________________________________________________________________________
// dx,dy refers as velocity(speed) of this animation
// For dx math.random-0.5 because to consider both directions of x similarly to dy

// let radius = Math.random() * 100;
// let x = radius + 1 + Math.random() * (innerWidth - (2 * radius + 2));
// let dx = (Math.random() - 0.5) * 10;
// let y = radius + 1 + Math.random() * (innerHeight - (2 * radius + 2));
// let dy = (Math.random() - 0.5) * 10;
// function randomColor() {
//   let startSymbol = "#";
//   let arr = "0123456789ABCDEF".split("");
//   for (let i = 0; i < 6; i++) {
//     startSymbol = startSymbol + arr[Math.round(Math.random() * 15)];
//   }
//   return startSymbol;
// }
// let color = randomColor();

// function animate() {
//   requestAnimationFrame(animate);

//   c.clearRect(0, 0, innerWidth, innerHeight);

//   //   For bouncing at borders
//   if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }
//   if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
//   }
//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.fillStyle = color;
//   c.strokeStyle = color;
//   c.fill();
//   c.stroke();
//   y += dy;
//   x += dx;
// }
// animate();
