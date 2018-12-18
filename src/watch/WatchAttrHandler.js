const AttrWatch = require("./AttrWatch");
module.exports = class WatchAttrHandler {
    constructor(el, value, view, signals) {
        this.el = el;
        this.view = view;
        this.signals = signals;
        const values = value.split(" ");
        for (let i = 0; i < values.length; i++) {
            const express = values[i];
            express.trim();
            if (express.length !== 0) {
                this.processAttr(values[i]);
            }
        }
    }
    processAttr(pair) {
        pair = pair.split(":");
        const attrName = pair[0];
        const listenedProperty = pair[1] || attrName;
        new AttrWatch(this.el, this.view, this.signals, listenedProperty, attrName);
    }
}