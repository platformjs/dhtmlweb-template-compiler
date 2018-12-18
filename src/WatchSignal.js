module.exports = class WatchSignal {
    constructor(delay, bypassThreshold) {
        this.delay = isNaN(delay) ? 10 : delay;
        this.bypassThreshold = isNaN(bypassThreshold) ? 10 : bypassThreshold;
        this.bypassCount = 0;
        this.watches = [];
    }
    on(watcher) {
        this.watches.push(watcher);
    }
    un(watcher) {
        for (let i = this.watches.length - 1; i >= 0; i--) {
            if (this.watches[i] === watcher) {
                this.watches.splice(i, 1);
            }
        }
    }
    beep(delay){
        setTimeout(() => this.gc(), 300);
        clearTimeout(this.updateTimeHandler);
        if (this.bypassCount === this.bypassThreshold) {
            this.bypassCount = 0;
            this.update();
            return;
        }
        this.bypassCount += 1;
        delay = isNaN(delay) ? this.delay : delay;
        if (delay === 0) {
            this.update();
            this.bypassCount = 0;
        } else {
            this.updateTimeHandler = setTimeout(() => this.update(), delay);
        }
    }
    update() {
        for (let i = 0; i < this.watches.length; i++) {
            const watcher = this.watches[i];
            watcher.update();
        }
    }
    gc() {
        const time = new Date().getTime();
        if (time - this.lastGCTime > 60 * 1000) {
            this.lastGCTime = time;
            this._gc();
        }
    }
    isMonted(el) {
        while (el.parentElement) {
            el = el.parentElement;
        }
        const nodeName = el.nodeName;
        return nodeName.toLowerCase() === "html";
    }
    _gc() {
        const n = this.watches.length;
        const time = new Date().getTime();
        for (let i = n - 1; i >= 0; i--) {
            const watch = this.watches[i];
            if (time - watch.createTime > 5 * 60 * 1000 && !this.isMonted(watch.el)) {
                this.watches.splice(i, 1);
            }
        }
    }
};