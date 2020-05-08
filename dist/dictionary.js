"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    constructor() {
        this.keys = [];
        this.vals = [];
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
        console.log(this.keys);
        console.log(this.vals);
    }
}
exports.Dictionary = Dictionary;
