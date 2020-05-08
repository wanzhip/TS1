Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.keys = [];
        this.vals = [];
    }
    get size() {
        return this.keys.length;
    }
    set(key, val) {
        let i = this.keys.indexOf(key);
        if (i != -1) {
            this.vals[i] = val;
        }
        else {
            this.keys.push(key);
            this.vals.push(val);
        }
    }
    get(k) {
        const i = this.keys.indexOf(k);
        if (i < 0) {
            return undefined;
        }
        return this.vals[i];
    }
    forEach(callback) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v);
        });
    }
    has(k) {
        return this.keys.includes(k);
    }
    delete(k) {
        const i = this.keys.indexOf(k);
        if (i < 0) {
            return;
        }
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
    }
}
exports.Dictionary = Dictionary;
Map;
