const ClassWatch = require("./ClassWatch");
module.exports = class WatchClassHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        const values = value.split(" ");
        for (let i = 0; i < values.length; i++) {
            const express = values[i];
            express.trim();
            if (express.length !== 0) {
                new ClassWatch(el, view, signals, express);
            }
        }
    }
}