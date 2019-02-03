import { getCurrentBitTime } from './ts/bitclock-backend';
import { update as updateClockDivs } from './ts/bitclock-frontend-dom';
import { update as updateFavicon} from './ts/bitclock-frontend-favicon';

const updateAll = () => {
    const currentBitTime = getCurrentBitTime();

    updateClockDivs(currentBitTime);
    updateFavicon(currentBitTime);
};

setInterval(updateAll, 1000);
updateAll();
