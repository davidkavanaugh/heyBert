import { randomCoordinates } from "../map/coordinates.js";
import { placeErnie } from "./ernie.js";

let numberDucks = 7;
export const placeDucks = (map, height, width) => {
  let i = numberDucks;
  while (i > 0) {
    let coordinates = randomCoordinates(height, width);
    if (map[coordinates[1]][coordinates[0]] === 0) {
      map[coordinates[1]][coordinates[0]] = 2;
      i--;
    } else {
      continue;
    }
  }
  return map;
};

export const decrementDucks = (map, height, width) => {
  numberDucks--;
  if (numberDucks === 0) {
    placeErnie(map, height, width);
  } else {
    return numberDucks;
  }
};
