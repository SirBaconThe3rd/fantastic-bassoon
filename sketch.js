function setup() {
  createCanvas(400, 400);
  village=loadImage('village.jpg')
}

function draw() {
  background(220, 220, 200);
  stroke(225, 225,205)
  strokeWeight(15)
  line(0, 0, 400, 400)
  line(50, 0, 400, 350)
  line(100, 0, 400, 300)
  line(150, 0, 400, 250)
  line(200, 0, 400, 200)
  line(250, 0, 400, 150)
  line(300, 0, 400, 100)
  line(350, 0, 400, 50)
  line(400, 0, 400, 0)
  line(0, 0, 400, 400)
  line(0, 50, 350, 400)
  line(0, 100, 300, 400)
  line(0, 150, 250, 400)
  line(0, 200, 200, 400)
  line(0, 250, 150, 400)
  line(0, 300, 100, 400)
  line(0, 350, 50, 400)
  line(0, 400, 0, 400)
  textSize(25)
  fill(0)
  noStroke()
  textFont("Georgia")
  text("Rinor's adventure!" ,100, 40)
  image(village, 50, 75, 300, 200)
}