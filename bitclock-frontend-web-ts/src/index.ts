import { bitTime } from 'bitclock-backend';
import { update as updateClockDivs } from './ts/bitclock-frontend-dom';
import { update as updateFavicon } from './ts/bitclock-frontend-favicon';

const updateAll = () => {
  const currentBitTime = bitTime();

  updateClockDivs(currentBitTime);
  updateFavicon(currentBitTime);
};

setInterval(updateAll, 1000);
updateAll();
