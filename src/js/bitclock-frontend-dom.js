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


export { updateClockDivs };