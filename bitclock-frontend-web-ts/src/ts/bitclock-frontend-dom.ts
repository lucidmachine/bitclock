import { BitDigit, BitTime, UpdateFn } from 'bitclock-backend';

export const buildBitHtml = (bit: number): string =>
  `<div class="bit ${bit ? 'on' : 'off'}">${bit}</div>`;

export const buildBitDigitHtml = (bitDigit: BitDigit): string => {
  const bitsHtml = bitDigit.map(bit => buildBitHtml(bit)).join('\n    ');
  return `  <div class="digit">
    ${bitsHtml}
  </div>`;
};

export const buildBitTimeHtml = (bitTime: BitTime): string => {
  const bitDigitsHtml = bitTime
    .map(bitDigit => buildBitDigitHtml(bitDigit))
    .join('\n');
  return `<div class="time">
${bitDigitsHtml}
</div>`;
};

const arrayLikeToArray = (arrayLike: any): ReadonlyArray<any> =>
  [].slice.call(arrayLike);

const getClockDivs = (): ReadonlyArray<HTMLElement> => {
  const elementCollection: HTMLCollection = document.getElementsByClassName(
    'clock-div'
  );
  return arrayLikeToArray(elementCollection);
};

const updateClockDiv = (clockElement: HTMLElement, bitTime: BitTime): void => {
  clockElement.innerHTML = buildBitTimeHtml(bitTime);
};

const updateClockDivs: UpdateFn = (bitTime: BitTime): void =>
  getClockDivs().forEach((clockDiv: HTMLElement) =>
    updateClockDiv(clockDiv, bitTime)
  );

export { updateClockDivs as update };
