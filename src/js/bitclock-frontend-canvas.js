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
    const bitTimeWithoutSeconds = bitTime.slice(0, 4);
    const canvas = getCanvas();
    const canvasContext = getCanvasContext();

    canvas.style.display = 'none';
    const bitWidth = canvas.width / bitTimeWithoutSeconds.length;
    const bitHeight = canvas.height / bitTimeWithoutSeconds[0].length;

    drawCanvas(canvasContext, bitTimeWithoutSeconds, bitWidth, bitHeight, colorOn, colorOff);
};

export { getCanvas, getCanvasContext, updateCanvas };
