const ValueWatch = require("./ValueWatch");
module.exports = class WatchAttrHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        let values = value.split(" ");
        const event = values[1];
        values = values[0].split(":");
        new ValueWatch(el, view, signals, values[0], values[1], values[2], values[3], values[4], event);
    }
}