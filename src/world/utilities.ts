export const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export const generateLifeSpanTime = (lifeSpan) => {
    const frame = 1;
    const minute = 60 * frame;
    return lifeSpan * minute;
}