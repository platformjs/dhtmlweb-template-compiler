const Watch = require("./Watch");
module.exports = class HtmlWatch extends Watch {
    constructor(el, view, signals, listenedProperty, outputFormat) {
        super(el, view, signals);
        this.listenedProperty = listenedProperty;
        this.outputFormat = outputFormat || "";
        this.update();
    }

    update() {
        const value = this.getValue();
        if (this.value !== value) {
            this.value = value;
            this.el.innerHTML = this.getFormattedOutput(value);
        }
    }

    getFormattedOutput(value) {
        if (this.endWith(this.outputFormat, "()")) {
            return this.view[this.outputFormat.split("()")[0]](value);
        }
        return this.standardFormattedOutput(value);
    }

    standardFormattedOutput(value) {
        value = !value && isNaN(value) ? "" : value;
        if (this.outputFormat) {
            return this.outputFormat.replace("{0}", value);
        }
        return value;
    }
};