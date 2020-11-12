import { moveOscar } from "./game-pieces/oscar.js";
import { moveBert } from "./game-pieces/bert.js";

import * as DrawMap from "./map/draw-map.js";

export const run = (map, height, width) => {
  let newMap;
  let duckBool = false;
  setInterval(async function () {
    let newTempMap = await moveOscar(map, duckBool);
    newMap = newTempMap.map;
    duckBool = newTempMap.duckBool;
    DrawMap.refresh(newMap);
  }, 200);

  setInterval(async function () {
    newMap = await moveBert(map, height, width);
    DrawMap.refresh(newMap);
  }, 0);
};
