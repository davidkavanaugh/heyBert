import { moveOscar } from "./game-pieces/oscar.js";
import { moveBert } from "./game-pieces/bert.js";

import * as DrawMap from "./map/draw-map.js";

export const run = (map, height, width) => {
  let newMap;
  setInterval(async function () {
    newMap = await moveOscar(map);
    DrawMap.refresh(newMap);
  }, 200);

  setInterval(async function () {
    newMap = await moveBert(map, height, width);
    DrawMap.refresh(newMap);
  }, 0);
};
