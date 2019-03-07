import { getCanvas, update as updateCanvas } from "./bitclock-frontend-canvas"
import {BitTime, UpdateFn} from 'bitclock-backend';

const updateFavicon: UpdateFn = (bitTime: BitTime): void => {
    updateCanvas(bitTime);

    let icon: HTMLLinkElement = <HTMLLinkElement>document.getElementById('favicon');

    let newIcon: HTMLLinkElement = <HTMLLinkElement>icon.cloneNode(true);
    newIcon.href = getCanvas().toDataURL();

    icon.parentNode.replaceChild(newIcon, icon);
};

export { updateFavicon as update };
