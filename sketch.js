num = 0;
maxNum = 5;
order = [];

function setup() {
  createCanvas(500, 300);
  background(0);
  // ellipse(199,50,20,20);
}

function draw() {
  if (maxNum > num && num >= 1) {
    stroke(150);
    strokeWeight(2);
    line(v.x, v.y, mouseX, mouseY);
    // console.log('pos x = '+v.x);
    // console.log('pos y = '+v.y);
  }
}

function mousePressed() {
  loop()
  order[num] = num;
  num++;
  if (num > maxNum) {
    return;
  }
  if (num === 1) {
    text('t', mouseX, mouseY - 20);
    fill(255);
  }
  text(num, mouseX, mouseY - 20);
  fill(255);
  console.log(num);
  console.log(order);
  noStroke();
  ellipse(mouseX, mouseY, 15);
  v = createVector(mouseX, mouseY);
}
function mouseReleased() {
  noLoop();
}

function keyPressed() {
  if (keyCode === ENTER) {
    for (let index = 0; index < 10; index++) {
      acak(order);
      console.log(order); 
    }
  } else {
    return false;
  }
}

function acak(urut) {
  result = shuffle(urut.slice(1, maxNum - 1));
  urut.splice(1, maxNum - 2);
  for (let i = 0; i < result.length; i++) {
    urut.splice(i + 1, 0, result[i]);
  }
  console.log(result);
  return order = urut;
  // console.log('urut' + urut);
  // console.log('order' + order);

}