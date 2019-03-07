import { bitTime } from 'bitclock-backend';
import {
  buildBitDigitHtml,
  buildBitHtml,
  buildBitTimeHtml
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
});
