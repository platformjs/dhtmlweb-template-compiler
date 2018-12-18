module.exports = class Watch {
    constructor(el, view, signals) {
        this.createTime = new Date().getTime();
        this.el = el;
        this.view = view;
        for (let i = 0; i < signals.length; i++) {
            signals[i].on(this);
        }
    }

    endWith(str, sfx) {
        return str.indexOf(sfx) === str.length - sfx.length;
    }

    startWith(str, pfx) {
        return str.indexOf(pfx) === 0;
    }

    getValue() {
        if (this.listenedProperty.indexOf("(") !== -1 && this.listenedProperty.indexOf(")") !== -1) {
            return eval(`this.view.${this.listenedProperty}`);
        } else {
            return this.view.get(this.listenedProperty);
        }
    }
};