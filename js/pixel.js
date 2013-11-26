var Pixel = function (clock, x, y) {
    // Clock
    this.clock = clock;

    // Canvas
    this.canvas = clock.canvas;
    this.ctx = clock.ctx;

    // Position
    this.x = x;
    this.y = y;

    // Dimensions
    this.width = this.canvas.width / 4;
    this.height = this.canvas.height / 4;

    // Colors
    this.COLOR_ON = 'rgb(255, 255, 255)';
    this.COLOR_OFF = 'rgb(0, 0, 0)';

    // State
    this.isOn = false;
}

Pixel.prototype = {
    /**
     * Draws the Pixel to the canvas.
     */
    draw: function () {
        // Set fill
        this.ctx.fillStyle = this.isOn ? this.COLOR_ON : this.COLOR_OFF;

        // Fill rectangle
        this.ctx.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    }
}