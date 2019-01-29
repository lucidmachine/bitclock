const tensDigit = num =>
    Math.floor(num / 10);

const onesDigit = num =>
    num % 10;

const timeAsDigits = time => [
    tensDigit(time.getHours()),
    onesDigit(time.getHours()),
    tensDigit(time.getMinutes()),
    onesDigit(time.getMinutes()),
    tensDigit(time.getSeconds()),
    onesDigit(time.getSeconds()),
];

const placeValues = [8, 4, 2, 1];

const isBitActive = (placeValue, digit) =>
    (placeValue & digit) > 0;

const bitDigit = digit =>
    placeValues
        .map(placeValue =>
            isBitActive(placeValue, digit) ?
                1 :
                0);

const bitTime = date =>
    timeAsDigits(date)
        .map(digit =>
            bitDigit(digit));

const getCurrentBitTime = () =>
    bitTime(new Date());

export { bitDigit, bitTime, getCurrentBitTime };