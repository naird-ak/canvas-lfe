import { Velocity, Coordinates } from "./interfaces";

export const generateRandomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateUuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

export const generateRandomVelocity = () => {
    return new Velocity(
        generateRandomNumber(0.5, 0.1),
        new Coordinates(
            generateRandomNumber(1, -1),
            generateRandomNumber(1, -1)
        )
    )
}