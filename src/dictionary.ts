export type Callback<K, V> = (key: K, val: V) => void;
export class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];
  get size(): number {
    return this.keys.length;
  }
  set(key: K, val: V) {
    let i = this.keys.indexOf(key);
    if (i != -1) {
      this.vals[i] = val;
    } else {
      this.keys.push(key);
      this.vals.push(val);
    }
  }
  get(k: K): V | undefined {
    const i = this.keys.indexOf(k);
    if (i < 0) {
      return undefined;
    }
    return this.vals[i];
  }
  forEach(callback: Callback<K, V>) {
    this.keys.forEach((k, i) => {
      const v = this.vals[i];
      callback(k, v);
    });
  }
  has(k: K) {
    return this.keys.includes(k);
  }
  delete(k: K) {
    const i = this.keys.indexOf(k);
    if (i < 0) {
      return;
    }
    this.keys.splice(i, 1);
    this.vals.splice(i, 1);
  }
}
Map;
