import { getCoordinates, randomCoordinates } from "../map/coordinates.js";
import { decrementDucks } from "./ducks.js";
export const placeBert = (map, height, width) => {
  let i = 1;
  while (i > 0) {
    let coordinates = randomCoordinates(height, width);
    if (map[coordinates[1]][coordinates[0]] === 0) {
      map[coordinates[1]][coordinates[0]] = 4;
      i--;
    } else {
      continue;
    }
  }
  return map;
};

export const moveBert = async (map, height, width) => {
  let bertCoorindates = getCoordinates(4, map);
  document.onkeydown = (e) => {
    if (e.key === "ArrowUp") {
      if (map[bertCoorindates[1] - 1][bertCoorindates[0]] !== 1) {
        if (map[bertCoorindates[1] - 1][bertCoorindates[0]] === 5) {
          alert("Hey Bert!");
          window.location.reload();
        }
        if (map[bertCoorindates[1] - 1][bertCoorindates[0]] === 2) {
          decrementDucks(map, height, width);
        }
        if (map[bertCoorindates[1] - 1][bertCoorindates[0]] === 3) {
          alert("Game Over!");
          window.location.reload();
        }
        map[bertCoorindates[1] - 1][bertCoorindates[0]] = 4;
        map[bertCoorindates[1]][bertCoorindates[0]] = 0;
      }
    }

    if (e.key === "ArrowDown") {
      if (map[bertCoorindates[1] + 1][bertCoorindates[0]] !== 1) {
        if (map[bertCoorindates[1] + 1][bertCoorindates[0]] === 5) {
          alert("Hey Bert!");
          window.location.reload();
        }
        if (map[bertCoorindates[1] + 1][bertCoorindates[0]] === 2) {
          decrementDucks(map, height, width);
        }
        if (map[bertCoorindates[1] + 1][bertCoorindates[0]] === 3) {
          alert("Game Over!");
          window.location.reload();
        }
        map[bertCoorindates[1] + 1][bertCoorindates[0]] = 4;
        map[bertCoorindates[1]][bertCoorindates[0]] = 0;
      }
    }
    if (e.key === "ArrowLeft") {
      if (map[bertCoorindates[1]][bertCoorindates[0] - 1] !== 1) {
        if (map[bertCoorindates[1]][bertCoorindates[0] - 1] === 5) {
          alert("Hey Bert!");
          window.location.reload();
        }
        if (map[bertCoorindates[1]][bertCoorindates[0] - 1] === 2) {
          decrementDucks(map, height, width);
        }
        if (map[bertCoorindates[1]][bertCoorindates[0] - 1] === 3) {
          alert("Game Over!");
          window.location.reload();
        }
        map[bertCoorindates[1]][bertCoorindates[0] - 1] = 4;
        map[bertCoorindates[1]][bertCoorindates[0]] = 0;
      }
    }
    if (e.key === "ArrowRight") {
      if (map[bertCoorindates[1]][bertCoorindates[0] + 1] !== 1) {
        if (map[bertCoorindates[1]][bertCoorindates[0] + 1] === 5) {
          alert("Hey Bert!");
          window.location.reload();
        }
        if (map[bertCoorindates[1]][bertCoorindates[0] + 1] === 2) {
          decrementDucks(map, height, width);
        }
        if (map[bertCoorindates[1]][bertCoorindates[0] + 1] === 3) {
          alert("Game Over!");
          window.location.reload();
        }
        map[bertCoorindates[1]][bertCoorindates[0] + 1] = 4;
        map[bertCoorindates[1]][bertCoorindates[0]] = 0;
      }
    }
  };
  return map;
};
