const Watch = require("./Watch");
module.exports = class AttrWatch extends Watch {
    constructor(el, view, signals, listenedProperty, attrName) {
        super(el, view, signals);
        this.attrName = attrName;
        this.listenedProperty = listenedProperty;
        this.update();
    }

    update() {
        const value = this.getValue();
        if (this.value !== value) {
            this.value = value;
            if (this.attrName === "disabled" || this.attrName === "readonly") {
                if (value) {
                    this.el.setAttribute(this.attrName, true);
                } else {
                    this.el.removeAttribute(this.attrName);
                }
            } else {
                this.el.setAttribute(this.attrName, value);
            }
        }
    }
}