import { BitDigit, BitTime, UpdateFn } from 'bitclock-backend';

const colorOn = 'rgb(255, 255, 255)';
const colorOff = 'rgb(0, 0, 0)';

const fillStyle = (bit: number): string => (bit ? colorOn : colorOff);

const drawBit = (
  ctx: CanvasRenderingContext2D,
  bit: number,
  x: number,
  y: number,
  width: number,
  height: number
): void => {
  ctx.fillStyle = fillStyle(bit);
  ctx.fillRect(x * width, y * height, width, height);
};

const drawCanvas = (
  canvas: HTMLCanvasElement,
  bitTime: BitTime,
  bitWidth: number,
  bitHeight: number
): void => {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bitTime.forEach((bitDigit: BitDigit, x: number) => {
    bitDigit.forEach((bit: number, y: number) => {
      drawBit(ctx, bit, x, y, bitWidth, bitHeight);
    });
  });
};

const getCanvas = (): HTMLCanvasElement =>
  document.getElementById('clock-canvas') as HTMLCanvasElement;

const updateCanvas: UpdateFn = (bitTime: BitTime): void => {
  const bitTimeWithoutSeconds = bitTime.slice(0, 4);
  const canvas = getCanvas();

  canvas.style.display = 'none';
  const bitWidth = canvas.width / bitTimeWithoutSeconds.length;
  const bitHeight = canvas.height / bitTimeWithoutSeconds[0].length;

  drawCanvas(canvas, bitTimeWithoutSeconds, bitWidth, bitHeight);
};

export { getCanvas, updateCanvas as update };
