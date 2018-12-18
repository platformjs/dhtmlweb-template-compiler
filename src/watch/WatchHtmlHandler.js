const HtmlWatch = require("./HtmlWatch");
module.exports = class WatchHtmlHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        const values = value.split(":");
        new HtmlWatch(el, view, signals, values[0], values[1]);
    }
};