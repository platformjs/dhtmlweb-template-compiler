const Watch = require("./Watch");
module.exports = class ClassWatch extends Watch {
    constructor(el, view, signals, listenedProperty, feedbackProperty, displayFormat, inputParser, acceptValidator, feedbackEvent) {
        super(el, view, signals);
        this.signals = signals;
        this.listenedProperty = listenedProperty;
        if (feedbackProperty.indexOf("()") !== -1) {
            throw new Error(`Unsupported ${feedbackProperty}`);
        }
        this.feedbackProperty = feedbackProperty;
        this.displayFormat = displayFormat || "";
        this.displayFormat = this.endWith(this.displayFormat, "()") ? this.displayFormat : this.view.get(this.displayFormat) || "";
        this.inputParser = inputParser || "";
        this.inputParser = this.endWith(this.inputParser, "()") ? this.inputParser : this.view.get(this.inputParser) || "";
        this.acceptValidator = acceptValidator || "";
        this.acceptValidator = this.endWith(this.acceptValidator, "()") ? this.acceptValidator : this.view.get(this.acceptValidator) || "";
        this.addEvent("focus", this.el, evt => {
            this.focused = true;
            this.el.value = this.getValue() || "";
            this.el.select();
        });
        this.addEvent("blur", this.el, evt => {
            this.focused = false;
            this.el.value = this.getFormattedOutput(this.getValue());
        });
        this.addEvent("keypress", this.el, evt => {
            const acceptable = this.isInputAccepted(this.el.value, evt.key, this.el.selectionStart, this.el.selectionEnd);
            if(!acceptable) {
                evt.preventDefault();
            }
        });
        feedbackEvent = feedbackEvent ? this.view.get(feedbackEvent) : "keyup";
        const feedbackEvents = (feedbackEvent || "keyup").split("|");
        for (let i = 0; i < feedbackEvents.length; i++) {
            const e = feedbackEvents[i];
            const es = e.split(":");
            //TODO handle the key
            this.addEvent(es[0], this.el, evt => {
                this.setValue(this.getFormattedInput(this.el.value));
                this.beep();
            });
        }
        this.update();
    }

    setValue(value) {
        if (this.endWith(this.feedbackProperty, ")")) {
            const express = `this.view.${this.feedbackProperty.replace(")", ", value)")}`;
            eval(express);
        } else {
            this.view.set(this.feedbackProperty, value);
        }
    }

    getFormattedOutput(value) {
        if (this.endWith(this.displayFormat, "()")) {
            return this.view[this.displayFormat.split("()")[0]](value);
        }
        return this.standardFormattedOutput(value);
    }

    standardFormattedOutput(value) {
        value = !value && isNaN(value) ? "" : value;
        if (this.displayFormat) {
            return this.displayFormat.replace("{0}", value);
        }
        return value;
    }

    getFormattedInput(value) {
        if (this.endWith(this.inputParser, "()")) {
            return this.view[this.inputParser.split("()")[0]](value);
        }
        return this.standardFormattedInput(value);
    }

    standardFormattedInput(value) {
        value = !value && isNaN(value) ? "" : value;
        if (this.inputParser === "number") {
            const number =  Number(value);
            return isNaN(number) ? 0 : number;
        } else if (this.inputParser === "int") {
            const intValue = parseInt(value);
            return isNaN(intValue) ? 0 : intValue;
        } else if (this.inputParser === "boolean") {
            return value.toLowerCase() !== "false";
        }
        return value;
    }

    isInputAccepted(value, key, start, end) {
        start = Number(start);
        end = Number(end);
        let expect = value.substring(0, start) + key + value.substring(end);
        if (this.endWith(this.acceptValidator, "()")) {
            return this.view[this.acceptValidator.split("()")[0]](value, key, expect, start, end);
        }
        return this.standardInputAccepted(value, key, expect, start, end);
    }

    standardInputAccepted(value, key, expect, start, end) {
        expect = !value && isNaN(expect) ? "" : expect;
        if (this.acceptValidator) {
            const rex = new RegExp(this.acceptValidator);
            return rex.test(expect);
        }
        return true;
    }

    update() {
        if (!this.focused) {
            let value = this.getFormattedOutput(this.getValue());
            if (value === undefined || value === null) {
                value = "";
            }
            if (value != this.el.value) {
                this.el.value = value;
            }
        }
    }

    beep() {
        for (let i = 0; i < this.signals.length; i++) {
            this.signals[i].beep();
        }
    }

    addEvent(name, el, func) {
        if (el.addEventListener)
            el.addEventListener(name, func, false);
        else if (elem.attachEvent) {
            el.attachEvent("on" + name, func);
        }
    }
};