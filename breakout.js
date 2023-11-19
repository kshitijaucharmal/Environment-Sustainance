"use strict";

let player,
  balls,
  bricks,
  score,
  scoreElem,
  powerupElem,
  wallTop,
  wallBottom,
  wallLeft,
  wallRight,
  paused = true,
  MAX_SPEED = 7,
  FALL_SPEED = 2,
  powerup_duration = 3000,
  powerup_active = false,
  start_time,
  // Priority values (Add to 10)
  p_food = 4,
  p_recycle = 3,
  p_energy = 3,
  powerups;

function setup() {
  createCanvas(600, 600);

  player = createSprite(0, height - 40, 100, 10);
  player.immovable = true;
  player.shapeColor = color(255, 255, 255);

  balls = new Group();
  reset();

  powerups = new Group();

  wallTop = createSprite(width / 2, -15, width, 30);
  wallTop.immovable = true;
  wallBottom = createSprite(width / 2, height + 30 / 2, width, 30);
  wallBottom.immovable = true;
  wallLeft = createSprite(-15, height / 2, 30, height);
  wallLeft.immovable = true;
  wallRight = createSprite(width + 15, height / 2, 30, height);
  wallRight.immovable = true;
}

function reset() {
  if (balls) balls.removeSprites();
  const ball = createSprite(width / 2, height / 2, 11, 11);
  ball.maxSpeed = MAX_SPEED;
  ball.setSpeed(-MAX_SPEED, 90);
  balls.add(ball);

  if (powerups) powerups.removeSprites();
  start_time = millis();

  score = 0;
  scoreElem = document.getElementById("score");
  powerupElem = document.getElementById("powerup");
  powerupElem.innerText = "None";

  createBricks();
  noLoop();
}

function mousePressed() {
  if (paused) {
    updateScore(-score);
    loop();
    paused = false;
  }
}

function spawnPowerup(type, pos, col) {
  const powerup = createSprite(pos.x, pos.y, 30, 30);
  powerup.type = type;
  powerup.shapeColor = col;
  powerup.immovable = false;
  powerup.velocity.y = FALL_SPEED;
  powerups.add(powerup);
}

function createBricks() {
  const rows = 6;
  const cols = 8;
  const OFFSET = 4;
  const WALLOFFSET = 20;

  const brick_w = (width - WALLOFFSET * 3) / cols;
  const brick_h = 30;

  if (bricks) bricks.removeSprites();
  bricks = new Group();

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const sprite = createSprite(
        WALLOFFSET + (i * (OFFSET + brick_w) + brick_w / 2),
        WALLOFFSET + (j * (OFFSET + brick_h) + brick_h / 2),
        brick_w,
        brick_h
      );
      sprite.shapeColor = color(255, 255, 255);
      sprite.immovable = true;
      bricks.add(sprite);
    }
  }
}

function draw() {
  background(0);

  if (paused) {
    player.position.x = width / 2;
    textSize(32);
    fill(255, 255, 0);
    text("Click to Start", width / 2 - 100, height / 2 - 32);
  } else {
    player.position.x = constrain(
      mouseX,
      player.width / 2,
      width - player.width / 2
    );
  }

  if (powerup_active) {
    if (millis() - start_time >= powerup_duration) {
      DisablePowerups();
      powerup_active = false;
    }
  }

  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];
    ball.bounce(wallTop);
    ball.bounce(wallBottom, onBallHitBottom);
    ball.bounce(wallLeft);
    ball.bounce(wallRight);
    ball.bounce(bricks, onBallHitBrick);
    if (ball.bounce(player)) {
      const swing = (ball.position.x - player.position.x) / 3;
      ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
    }
  }

  player.bounce(powerups, onPlayerHitPowerup);

  drawSprites();
}

function DisablePowerups() {
  // LargePaddle
  player.width = 100;
  // SlowBall
  for (let i = 0; i < balls.length; i++) {
    balls[i].maxSpeed = MAX_SPEED;
  }
}

function BallMultiply() {
  powerupElem.innerText = "Recycle";
  const ball = createSprite(balls[0].position.x, balls[0].position.y, 11, 11);
  ball.shapeColor = balls[0].shapeColor;
  ball.maxSpeed = balls[0].maxSpeed;
  ball.setSpeed(-MAX_SPEED, random(0, 360));
  balls.add(ball);
}

function LargePaddle() {
  powerupElem.innerText = "Food";
  player.width *= 1.5;
}

function SlowBall() {
  powerupElem.innerText = "Energy";
  for (let i = 0; i < balls.length; i++) balls[i].maxSpeed = MAX_SPEED * 0.5;
}

function onPlayerHitPowerup(player, powerup) {
  if (!powerup_active) {
    start_time = millis();
    powerup_active = true;
    powerupElem.innerText = "None";
    return;
  }
  switch (powerup.type) {
    case "BallMultiply":
      BallMultiply();
      break;
    case "LargePaddle":
      LargePaddle();
      break;
    case "SlowBall":
      SlowBall();
      break;
    default:
      console.log("Wrong");
  }
  powerup.remove();
}

function onBallHitBrick(ball, brick) {
  updateScore(10);
  brick.remove();

  // Water
  if (random() < 0.3) {
    let objects = [];
    for (let i = 0; i < p_food; i++) {
      objects.push("Food");
    }
    for (let i = 0; i < p_energy; i++) {
      objects.push("Energy");
    }
    for (let i = 0; i < p_recycle; i++) {
      objects.push("Recycle");
    }

    const select = objects[int(random(0, objects.length))];
    let col = color(100, 100, 100);
    switch (select) {
      case "Recycle":
        col = color(100, 100, 255);
        spawnPowerup("BallMultiply", brick.position, col);
        break;
      case "Food":
        col = color(252, 102, 0);
        spawnPowerup("LargePaddle", brick.position, col);
        break;
      case "Energy":
        col = color(216, 192, 32);
        spawnPowerup("SlowBall", brick.position, col);
        break;

      default:
        console.log("Somehing is wrong");
    }
  }
}
function onBallHitBottom(ball, wall) {
  if (balls.length != 1) {
    ball.remove();
    return;
  }
  reset();
  player.position.x = width / 2;
  player.position.y = height - 40;
  ball.position.x = width / 2;
  ball.position.y = height / 2;
  paused = true;
}

function updateScore(toAdd) {
  score += toAdd;
  scoreElem.innerText = score;
}
