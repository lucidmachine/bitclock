/**
 * Constructs a Clock object.
 *
 * @constructor
 */
var Clock = function () {
    // Canvas
    this.canvas = document.getElementById('clock');
    this.ctx = this.canvas.getContext('2d');

    // Time
    this.time = null;
    this.interval = window.setInterval(this.tick.bind(this), 1000);

    // Pixels
    this.pixels = [
        new Pixel(this, 0, 0), new Pixel(this, 0, 1), new Pixel(this, 0, 2), new Pixel(this, 0, 3),
        new Pixel(this, 1, 0), new Pixel(this, 1, 1), new Pixel(this, 1, 2), new Pixel(this, 1, 3),
        new Pixel(this, 2, 0), new Pixel(this, 2, 1), new Pixel(this, 2, 2), new Pixel(this, 2, 3),
        new Pixel(this, 3, 0), new Pixel(this, 3, 1), new Pixel(this, 3, 2), new Pixel(this, 3, 3)
    ]
}

Clock.prototype = {
    tick: function () {
        this.update();
        this.draw();
    },

    update: function () {
        // Get new time
        this.time = new Date();

        // Update pixels
        this.pixels.forEach(function (pixel) {
            pixel.update(this.time);
        }.bind(this));
    },

    draw: function () {
        this.drawCanvas();
        this.drawFavicon();
    },

    drawCanvas: function () {
        this.pixels.forEach(function (pixel) { pixel.draw(); });
    },

    drawFavicon: function () {

    }
}

var clock = new Clock();