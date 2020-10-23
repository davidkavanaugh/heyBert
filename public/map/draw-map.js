import { drawBlankMap } from "./blank-map.js";
import { drawInsideWalls, drawOutsideWalls } from "./walls.js";
import { drawPath } from "./path.js";
import { placeDucks } from "../game-pieces/ducks.js";
import { placeOscar } from "../game-pieces/oscar.js";
import { moveBert, placeBert } from "../game-pieces/bert.js";

export const newMap = (height, width) => {
  const blankMap = drawBlankMap(height, width);
  const outlinedMap = drawOutsideWalls(blankMap, height, width);
  const pathedMap = drawPath(outlinedMap, height, width);
  const walledMap = drawInsideWalls(pathedMap);
  const mapWithDucks = placeDucks(walledMap, height, width);
  const mapWithOscar = placeOscar(mapWithDucks, height, width);
  placeBert(mapWithOscar, height, width);
  return mapWithOscar;
};

export const refresh = (map) => {
  $(document).ready(function () {
    let output = "";
    for (let y = 0; y < map.length; y++) {
      output += "\n<div class='row'>";
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 0) {
          output += "<div class='col blank'></div>";
        }
        if (map[y][x] === 1) {
          output += "<div class='col wall'></div>";
        }
        if (map[y][x] === 2) {
          output += "<div class='col ducky'></div>";
        }
        if (map[y][x] === 3) {
          output += "<div class='col oscar'></div>";
        }
        if (map[y][x] === 4) {
          output += "<div class='col bert'></div>";
        }
        if (map[y][x] === 5) {
          output += "<div class='col ernie'></div>";
        }
      }
      output += "\n</div>";
    }
    $("#canvas").html(output);
  });
};
