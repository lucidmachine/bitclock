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

// Transform an array of digits into a BitTime
const placeValues = [8, 4, 2, 1];
const isBitActive = (placeValue, digit) => (placeValue & digit) > 0;
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

// Get current BitTime
const getCurrentBitTime = () => bitTime(new Date());

// Frontend - DOM Manipulation
const clockDiv = bitTime =>
    bitTime.map(bitDigit =>
        [
            '<div class="digit">',
            bitDigit.map(bit =>
                `<div class="bit ${bit ? 'on' : 'off'}">${bit}</div>`).join(''),
            '</div>'
        ].join('')
    ).join('');
const updateClockDiv = (clockElement, bitTime) =>
    clockElement.innerHTML = clockDiv(bitTime);
const updateClockDivs = bitTime =>
    Array.from(document.getElementsByClassName('clock-div'))
    .forEach(clockDiv =>
        updateClockDiv(clockDiv, bitTime));

// Frontend - Canvas
const width = 50;
const height = 50;
const colorOn = 'rgb(255, 255, 255)';
const colorOff = 'rgb(0, 0, 0)';
const fillStyle = (bit, colorOn, colorOff) =>
    bit ?
        colorOn :
        colorOff;
const drawBit = (canvasContext, bit, x, y, width, height, colorOn, colorOff) => {
    canvasContext.fillStyle = fillStyle(bit, colorOn, colorOff);
    canvasContext.fillRect(x * width, y * height, width, height);
};
const drawCanvas = (canvasContext, bitTime, bitWidth, bitHeight, bitColorOn, bitColorOff) => {
    canvasContext.clearRect(0, 0, canvasContext.width, canvasContext.height);

    bitTime.forEach((digit, x) => {
        digit.forEach((bit, y) => {
            drawBit(canvasContext, bit, x, y, bitWidth, bitHeight, bitColorOn, bitColorOff);
        });
    });
};
const getCanvas = () =>
    document.getElementById('clock-canvas');
const getCanvasContext = () =>
    getCanvas().getContext('2d');
const updateCanvas = bitTime => {
    getCanvas().style.display = 'none';
    drawCanvas(getCanvasContext(), bitTime, width, height, colorOn, colorOff);
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
    const currentBitTime = getCurrentBitTime();
    console.log(currentBitTime);
    updateClockDivs(currentBitTime);
    updateCanvas(currentBitTime);
    updateFavicon();
};
setInterval(update, 1000);
update();
