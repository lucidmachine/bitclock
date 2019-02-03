const colorOn = 'rgb(255, 255, 255)';
const colorOff = 'rgb(0, 0, 0)';

const fillStyle = (bit: number, colorOn: string, colorOff: string): string =>
    bit ?
        colorOn :
        colorOff;

const drawBit = (ctx: CanvasRenderingContext2D, bit: number, x: number, y: number, width: number, height: number, colorOn: string, colorOff: string): void => {
    ctx.fillStyle = fillStyle(bit, colorOn, colorOff);
    ctx.fillRect(x * width, y * height, width, height);
};

const drawCanvas = (canvas: HTMLCanvasElement, bitTime: any, bitWidth: number, bitHeight: number, bitColorOn: string, bitColorOff: string): void => {
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bitTime.forEach((bitDigit: any, x: number) => {
        bitDigit.forEach((bit: number, y: number) => {
            drawBit(ctx, bit, x, y, bitWidth, bitHeight, bitColorOn, bitColorOff);
        });
    });
};

const getCanvas = (): HTMLCanvasElement =>
    <HTMLCanvasElement> document.getElementById('clock-canvas');

const updateCanvas = (bitTime: any): void => {
    const bitTimeWithoutSeconds = bitTime.slice(0, 4);
    const canvas = getCanvas();

    canvas.style.display = 'none';
    const bitWidth = canvas.width / bitTimeWithoutSeconds.length;
    const bitHeight = canvas.height / bitTimeWithoutSeconds[0].length;

    drawCanvas(canvas, bitTimeWithoutSeconds, bitWidth, bitHeight, colorOn, colorOff);
};

export { getCanvas, updateCanvas };
