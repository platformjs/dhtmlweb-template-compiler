module.exports = class Event {
    constructor(event, currentTarget) {
        for (let p in event) {
            this[p] = event[p];
        }
        this.currentTarget = currentTarget;
    }
};