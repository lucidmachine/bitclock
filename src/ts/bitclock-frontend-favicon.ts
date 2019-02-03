import { getCanvas } from "./bitclock-frontend-canvas"

const updateFavicon = (): void => {
    let icon: HTMLLinkElement = <HTMLLinkElement>document.getElementById('favicon');

    let newIcon: HTMLLinkElement = <HTMLLinkElement>icon.cloneNode(true);
    newIcon.href = getCanvas().toDataURL();

    icon.parentNode.replaceChild(newIcon, icon);
};

export { updateFavicon };
