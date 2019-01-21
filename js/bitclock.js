// Slice a time up into individual digits
const tensDigit = num => Math.floor(num / 10);
const onesDigit = num => num % 10;
const timeAsDigits = time => [
    tensDigit(time.getHours()),
    onesDigit(time.getHours()),
    tensDigit(time.getMinutes()),
    onesDigit(time.getMinutes()),
    tensDigit(time.getSeconds()),
    onesDigit(time.getSeconds()),
];

// Transform an array of digits into an array of arrays of bits
const bitmasks = [8, 4, 2, 1];
const digitAsBitArray = digit => bitmasks.map(mask => mask & digit);
const timeAs2dBitArray = date =>
    timeAsDigits(date)
    .map(digit => digitAsBitArray(digit));

// Frontend - DOM Manipulation
const clockDiv = timeMatrix =>
    timeMatrix.map(digit =>
        [
            '<div class="digit">',
            digit.map(bit => `<div class="bit ${bit ? 'on' : 'off'}">${bit}</div>`).join(''),
            '</div>'
        ].join('')
    ).join('');
const updateClockDiv = (clockElement, timeMatrix) => clockElement.innerHTML = clockDiv(timeMatrix);
const updateClockDivs = timeMatrix =>
    Array.from(document.getElementsByClassName('clock-div'))
    .forEach(clockDiv => updateClockDiv(clockDiv, timeMatrix));

// Frontend - Canvas
const width = 50;
const height = 50;
const colorOn = 'rgb(255, 255, 255)';
const colorOff = 'rgb(0, 0, 0)';
const fillStyle = (bit, colorOn, colorOff) => bit ? colorOn : colorOff;
const drawBit = (canvasContext, bit, x, y, width, height, colorOn, colorOff) => {
    canvasContext.fillStyle = fillStyle(bit, colorOn, colorOff);
    canvasContext.fillRect(x * width, y * height, width, height);
};
const drawCanvas = (canvasContext, timeMatrix, bitWidth, bitHeight, bitColorOn, bitColorOff) => {
    canvasContext.clearRect(0, 0, canvasContext.width, canvasContext.height);

    timeMatrix.forEach((digit, x) => {
        digit.forEach((bit, y) => {
            drawBit(canvasContext, bit, x, y, bitWidth, bitHeight, bitColorOn, bitColorOff);
        });
    });
};
const getCanvas = () => document.getElementById('clock-canvas');
const getCanvasContext = () => getCanvas().getContext('2d');
const updateCanvas = timeMatrix => {
    getCanvas().style.display = 'none';
    drawCanvas(getCanvasContext(), timeMatrix, width, height, colorOn, colorOff);
};

// Frontend - Favicon
const updateFavicon = () => {
    let icon = document.getElementById('favicon');

    let newIcon = icon.cloneNode(true);
    newIcon.href = getCanvas().toDataURL();

    icon.parentNode.replaceChild(newIcon, icon);
};

// Timer
const update = () => {
    const currentTimeAs2dBitArray = timeAs2dBitArray(new Date());
    updateClockDivs(currentTimeAs2dBitArray);
    updateCanvas(currentTimeAs2dBitArray);
    updateFavicon();
};
setInterval(update, 1000);
update();
