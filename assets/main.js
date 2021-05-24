const grid = document.querySelector("main div.grid");
const width = 28;
const scoreText = document.querySelector("#score");
let score = 0;
let pacManIndex = 500;
let squares = [];

//28 * 28 = 784

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

for (let i = 0; i < layout.length; i++) {
  let box = document.createElement("div");
  switch (layout[i]) {
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
    case 0:
      box.classList.add("pac-dot");
      break;
    case 1:
      box.classList.add("wall");
      break;
    case 2:
      box.classList.add("ghost-lair");
      break;
    case 3:
      box.classList.add("power-pellet");
      break;
    default:
      break;
  }
  squares.push(box);
  grid.appendChild(box);
}

//Connect keys to actions
function control(e) {
  squares[pacManIndex].classList.remove("pacman");
  switch (e.keyCode) {
    case 40:
      if (
        !squares[pacManIndex + width].classList.contains("ghost-lair") &&
        !squares[pacManIndex + width].classList.contains("wall") &&
        pacManIndex + width < width * width
      )
        pacManIndex += width;
      break;
    case 38:
      if (
        !squares[pacManIndex - width].classList.contains("ghost-lair") &&
        !squares[pacManIndex - width].classList.contains("wall") &&
        pacManIndex + width >= 0
      )
        pacManIndex -= width;
      break;
    case 37:
      if (
        !squares[pacManIndex - 1].classList.contains("ghost-lair") &&
        !squares[pacManIndex - 1].classList.contains("wall") &&
        pacManIndex % width !== 0
      )
        pacManIndex -= 1;
      if (pacManIndex === 364) {
        pacManIndex = 391;
      }
      break;
    case 39:
      if (
        !squares[pacManIndex + 1].classList.contains("ghost-lair") &&
        !squares[pacManIndex + 1].classList.contains("wall") &&
        pacManIndex % width < width - 1
      )
        pacManIndex += 1;
      if (pacManIndex === 391) {
        pacManIndex = 364;
      }
      break;
    default:
      break;
  }
  squares[pacManIndex].classList.add("pacman");
  pacDotEaten();
  powerPelletEaten();
}
document.addEventListener("keyup", control);

squares[pacManIndex].classList.add("pacman");

function pacDotEaten() {
  if (squares[pacManIndex].classList.contains("pac-dot")) {
    score++;
    squares[pacManIndex].classList.remove("pac-dot");
  }
  // @ts-ignore
  scoreText.innerHTML = score;
}

function powerPelletEaten() {
  //if square pacman is in contains a power pellet
  if (squares[pacManIndex].classList.contains("power-pellet")) {
    //removing class of power-pellet from square
    squares[pacManIndex].classList.remove("power-pellet");
    //add a score of 10
    score += 10;
    //change each of the four ghosts to isScared
    ghosts.forEach((ghost) => (ghost.isScared = true));
    //use setTimeout to unscare ghosts after 10 seconds
    setTimeout(unScareGhosts, 10000);
  }
}

function unScareGhosts() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerID = NaN;
  }
}

let ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 379, 500),
];

//draw my ghosts onto my grid
ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

//move the ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  console.log("moved ghost");
  const directions = [-1, +1, -width, +width];
  let direction = directions[Math.floor(Math.random() * directions.length)];
  console.log(direction);

  ghost.timerId = setInterval(function () {
    //all our code
    //if the next square does NOT contain a wall and does not contain a ghost
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      //remove any ghost
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost");
      // //add direction to current Index
      ghost.currentIndex += direction;
      // //add ghost class
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else direction = directions[Math.floor(Math.random() * directions.length)];

    //if the ghost is currently scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }
  }, ghost.speed);
}
