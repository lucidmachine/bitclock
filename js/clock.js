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
    this.interval = window.setInterval(this.update.bind(this), 1000);
}

Clock.prototype = {
    draw: function () {

    },

    update: function () {
        console.log('update');

    }
}

var clock = new Clock();