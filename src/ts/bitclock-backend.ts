const tensDigit = (num: number): number =>
    Math.floor(num / 10);

const onesDigit = (num: number): number =>
    num % 10;

const timeAsDigits = (time: Date): number[] => [
    tensDigit(time.getHours()),
    onesDigit(time.getHours()),
    tensDigit(time.getMinutes()),
    onesDigit(time.getMinutes()),
    tensDigit(time.getSeconds()),
    onesDigit(time.getSeconds()),
];

const placeValues = [8, 4, 2, 1];

const isBitActive = (placeValue: number, digit: number): boolean =>
    (placeValue & digit) > 0;

const bitDigit = (digit: number): any =>
    placeValues
        .map(placeValue =>
            isBitActive(placeValue, digit) ?
                1 :
                0);

const bitTime = (date: Date): any =>
    timeAsDigits(date)
        .map(digit =>
            bitDigit(digit));

const getCurrentBitTime = (): any =>
    bitTime(new Date());

export { bitDigit, bitTime, getCurrentBitTime };