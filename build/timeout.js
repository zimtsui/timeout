"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeout = exports.setTimeout = void 0;
class Deferred {
    constructor(cb, ms) {
        this.nodeTimeout = globalThis.setTimeout(cb, ms);
    }
    clear() {
        globalThis.clearTimeout(this.nodeTimeout);
    }
}
class Immediate {
    constructor(cb) {
        this.nodeImmediate = globalThis.setImmediate(cb);
    }
    clear() {
        globalThis.clearImmediate(this.nodeImmediate);
    }
}
class Perpetual {
    constructor() { }
    clear() { }
}
function setTimeout(cb, ms) {
    if (ms === 0)
        return new Immediate(cb);
    if (ms === Number.POSITIVE_INFINITY)
        return new Perpetual();
    return new Deferred(cb, ms);
}
exports.setTimeout = setTimeout;
function clearTimeout(timeout) {
    timeout.clear();
}
exports.clearTimeout = clearTimeout;
//# sourceMappingURL=timeout.js.map