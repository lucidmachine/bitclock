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
    this.time = new Date();
    this.interval = window.setInterval(this.tick.bind(this), 1000);

    // Pixels
    this.pixels = [
        [new Pixel(this, 0, 0), new Pixel(this, 1, 0), new Pixel(this, 2, 0), new Pixel(this, 3, 0)],
        [new Pixel(this, 0, 1), new Pixel(this, 1, 1), new Pixel(this, 2, 1), new Pixel(this, 3, 1)],
        [new Pixel(this, 0, 2), new Pixel(this, 1, 2), new Pixel(this, 2, 2), new Pixel(this, 3, 2)],
        [new Pixel(this, 0, 3), new Pixel(this, 1, 3), new Pixel(this, 2, 3), new Pixel(this, 3, 3)]
    ]

    // Initial draw
    this.update();
    this.draw();
}

Clock.prototype = {
    tick: function () {
        // Get new time
        this.time = new Date();

        // Update state and UI when minute changes
        if (this.time.getSeconds() === 0) {
            this.update();
            this.draw();
        }
    },

    update: function () {
        // Get decimal digits as binary strings
        var binaryStrings = [];
        binaryStrings.push(Math.floor(this.time.getHours() / 10).toString(2));
        binaryStrings.push((this.time.getHours() % 10).toString(2));
        binaryStrings.push(Math.floor(this.time.getMinutes() / 10).toString(2));
        binaryStrings.push((this.time.getMinutes() % 10).toString(2));

        // Update pixels
        for (var y = 0; y < 4; y++) {
            for (var x = 0; x < 4; x++) {

                // 0-pad the binary string
                while (binaryStrings[x].length < 4) {
                    binaryStrings[x] = '0'+binaryStrings[x];
                }

                // Set whether the pixel is on
                var binaryString = binaryStrings[x];
                var bit = binaryStrings[x][y];
                var isOn = (binaryStrings[x][y] == '1');
                var pixel = this.pixels[y][x];
                this.pixels[y][x].isOn = (binaryStrings[x][y] == '1');
            }
        }
    },

    draw: function () {
        this.drawCanvas();
        this.drawFavicon();
    },

    drawCanvas: function () {
        this.pixels.forEach(function (row) {
            row.forEach(function (pixel) {
                pixel.draw();
            });
        });
    },

    drawFavicon: function () {

    }
}

var clock = new Clock();