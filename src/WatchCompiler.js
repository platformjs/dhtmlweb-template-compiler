const WatchHandler = require("./WatchHandler");
function compileEL(el, view, signals) {
    for (let att, i = 0, atts = el.attributes, n = atts.length; i < n; i++){
        att = atts[i];
        const name = att.nodeName;
        const value = att.nodeValue;
        if (name.indexOf("w-") !== 0) {
            continue;
        }
        const Handler = WatchHandler[name];
        if (!Handler) {
            return;
        }
        new Handler(el, value, view, signals);
    }
}
module.exports = function compile(el, view, signals, shouldClearSignal) {
    if (!(signals instanceof Array)) {
        signals = [signals];
    }
    if (shouldClearSignal) {
        signals.forEach(signal => {
            signal.clean();
        });
    }
    let s = [el];
    while (s.length) {
        const cel = s.shift();
        compileEL(cel, view, signals);
        if (cel.children.length) {
            for (let i = 0; i < cel.children.length; i++) {
                s.push(cel.children[i]);
            }
        }
    }
};