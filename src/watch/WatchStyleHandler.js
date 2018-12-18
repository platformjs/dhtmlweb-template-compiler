const StyleWatch = require("./StyleWatch");
module.exports = class WatchStyleHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        const values = value.split(";");
        for (let i = 0; i < values.length; i++) {
            const express = values[i];
            express.trim();
            if (express.length !== 0) {
                this.processStyle(values[i]);
            }
        }
    }
    processStyle(pair) {
        pair = pair.split(":");
        let styleName = pair[0];
        styleName = styleName.split("#");
        const unit = styleName[1];
        styleName = styleName[0];
        const listenedProperty = pair[1] || styleName;
        new StyleWatch(this.el, this.view, this.signals, listenedProperty, styleName, unit);
    }
}