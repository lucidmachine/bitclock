import { bitTime } from 'bitclock-backend';
import {
  buildBitDigitHtml,
  buildBitHtml,
  buildBitTimeHtml,
  update,
  updateClockDiv
} from './bitclock-frontend-dom';

describe('DOM frontend', () => {
  describe('HTML generation', () => {
    describe('Bit', () => {
      it('should build a div element with the class "bit"', () => {
        const html = buildBitHtml(1);

        expect(html).toContain('<div class="bit');
        expect(html).toContain('</div>');
      });

      describe('when the bit is on', () => {
        it('should set the "on" style', () => {
          expect(buildBitHtml(1)).toEqual('<div class="bit on">1</div>');
        });
      });

      describe('when the bit is off', () => {
        it('should set the "off" style', () => {
          expect(buildBitHtml(0)).toEqual('<div class="bit off">0</div>');
        });
      });
    });

    describe('BitDigit', () => {
      it('should build a div element with 4 Bit elements inside', () => {
        const expectedBitDigitHtml = `  <div class="digit">
    <div class="bit on">1</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>`;

        expect(buildBitDigitHtml([1, 0, 1, 0])).toEqual(expectedBitDigitHtml);
      });
    });

    describe('BitTime', () => {
      it('should build a div element with 6 BitDigit elements inside', () => {
        const time = bitTime(new Date(2019, 0, 1, 22, 22, 22));
        const expectedBitTimeHtml = `<div class="time">
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
  <div class="digit">
    <div class="bit off">0</div>
    <div class="bit off">0</div>
    <div class="bit on">1</div>
    <div class="bit off">0</div>
  </div>
</div>`;

        expect(buildBitTimeHtml(time)).toEqual(expectedBitTimeHtml);
      });
    });
  });

  describe('Update', () => {
    const timeBeforeUpdate = bitTime(new Date(2019, 0, 1, 12, 34, 56));
    const timeAfterUpdate = bitTime(new Date(2019, 0, 1, 12, 34, 57));

    describe('given a single clock', () => {
      it('should replace the content of the "clock-div" with an updated "time"', () => {
        const clockDiv = document.createElement('div');
        clockDiv.innerHTML = buildBitTimeHtml(timeBeforeUpdate);

        updateClockDiv(clockDiv, timeAfterUpdate);

        expect(clockDiv.innerHTML).toEqual(buildBitTimeHtml(timeAfterUpdate));
      });
    });

    describe('given multiple clocks', () => {
      it('should replace the content of each "clock-div" with an updated "time"', () => {
        const container: HTMLDivElement = document.createElement('div');
        const clockDiv1: HTMLDivElement = document.createElement('div');
        const clockDiv2: HTMLDivElement = document.createElement('div');
        clockDiv1.setAttribute('class', 'clock-div');
        clockDiv2.setAttribute('class', 'clock-div');
        clockDiv1.innerHTML = buildBitTimeHtml(timeBeforeUpdate);
        clockDiv2.innerHTML = buildBitTimeHtml(timeBeforeUpdate);
        const time1 = clockDiv1.childNodes.item(0);
        const time2 = clockDiv2.childNodes.item(0);
        document.body.appendChild(container);
        container.appendChild(clockDiv1);
        container.appendChild(clockDiv2);

        update(timeAfterUpdate);

        expect(container.childNodes.length).toBe(2);
        expect(clockDiv1).not.toContain(time1);
        expect(clockDiv2).not.toContain(time2);
        expect(clockDiv1.innerHTML).toEqual(buildBitTimeHtml(timeAfterUpdate));
        expect(clockDiv2.innerHTML).toEqual(buildBitTimeHtml(timeAfterUpdate));
      });
    });
  });
});
