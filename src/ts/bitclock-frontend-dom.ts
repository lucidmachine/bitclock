const buildBitHtml = (bit: number): string =>
    `<div class="bit ${bit ? 'on' : 'off'}">${bit}</div>`;

const buildBitDigitHtml = (bitDigit: any): string =>
    bitDigit.map((bit: number): string =>
        `<div class="digit">
            ${buildBitHtml(bit)}
        </div>`
    ).join('');

const buildBitTimeHtml = (bitTime: any): string =>
    bitTime.map((bitDigit: any): string =>
        `<div class="digit">
            ${buildBitDigitHtml(bitDigit)}
        </div>`
    ).join('');

const arrayLikeToArray = (arrayLike: any): any[] =>
    [].slice.call(arrayLike);

const getClockDivs = (): HTMLElement[] => {
    let elementCollection: HTMLCollection = document.getElementsByClassName('clock-div');
    return arrayLikeToArray(elementCollection);
};

const updateClockDiv = (clockElement: HTMLElement, bitTime: any): void => {
    clockElement.innerHTML = buildBitTimeHtml(bitTime);
};

const updateClockDivs = (bitTime: any): void =>
    getClockDivs().forEach((clockDiv: HTMLElement) =>
        updateClockDiv(clockDiv, bitTime));


export { updateClockDivs };