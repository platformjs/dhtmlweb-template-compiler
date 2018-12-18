const TextWatch = require("./TextWatch");
module.exports = class WatchTextHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        const values = value.split(":");
        new TextWatch(el, view, signals, values[0], values[1]);
    }
};