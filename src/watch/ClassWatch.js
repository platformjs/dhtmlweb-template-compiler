const Watch = require("./Watch");
module.exports = class ClassWatch extends Watch {
    constructor(el, view, signals, listenedProperty) {
        super(el, view, signals);
        this.listenedProperty = listenedProperty;  
        this.update();
    }

    update() {
        const value = this.getValue();
        if (this.value !== value) {
            if (this.value) {
                this.el.classList.remove(this.value);
            }
            if (value) {
                this.el.classList.add(value);
            }
            this.value = value;
        }
    }
}