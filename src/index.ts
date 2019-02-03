import { getCurrentBitTime } from './ts/bitclock-backend';
import { updateClockDivs } from './ts/bitclock-frontend-dom';
import { updateCanvas } from './ts/bitclock-frontend-canvas';
import { updateFavicon} from './ts/bitclock-frontend-favicon';

const update = () => {
    const currentBitTime = getCurrentBitTime();


    updateClockDivs(currentBitTime);

    updateCanvas(currentBitTime);
    updateFavicon();
};

setInterval(update, 1000);
update();
