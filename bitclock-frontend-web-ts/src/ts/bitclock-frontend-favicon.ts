import { BitTime, UpdateFn } from 'bitclock-backend';
import { getCanvas, update as updateCanvas } from './bitclock-frontend-canvas';

const updateFavicon: UpdateFn = (bitTime: BitTime): void => {
  updateCanvas(bitTime);

  const icon: HTMLLinkElement = document.getElementById(
    'favicon'
  ) as HTMLLinkElement;

  const newIcon: HTMLLinkElement = icon.cloneNode(true) as HTMLLinkElement;
  newIcon.href = getCanvas().toDataURL();

  icon.parentNode.replaceChild(newIcon, icon);
};

export { updateFavicon as update };
