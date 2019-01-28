import { getCanvas } from "./bitclock-frontend-canvas"

const updateFavicon = () => {
    let icon = document.getElementById('favicon');

    let newIcon = icon.cloneNode(true);
    newIcon.href = getCanvas().toDataURL();

    icon.parentNode.replaceChild(newIcon, icon);
};

export { updateFavicon };
