const Watch = require("./Watch");
module.exports = class StyleWatch extends Watch {
    constructor(el, view, signals, listenedProperty, styleName, unit) {
        super(el, view, signals);
        this.styleName = styleName;
        this.listenedProperty = listenedProperty;
        this.unit = unit || "";   
        this.update();
    }

    update() {
        const value = this.getValue();
        if (this.value !== value) {
            this.value = value;
            this.el.style[this.styleName] = value + this.unit;
        }
    }
}