import { getCurrentBitTime } from './js/bitclock-backend';
import { updateClockDivs } from './js/bitclock-frontend-dom';
import { updateCanvas } from './js/bitclock-frontend-canvas';
import { updateFavicon} from './js/bitclock-frontend-favicon';

const update = () => {
    const currentBitTime = getCurrentBitTime();


    updateClockDivs(currentBitTime);

    updateCanvas(currentBitTime);
    updateFavicon();
};

setInterval(update, 1000);
update();
