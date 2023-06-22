type Bucket = [string, number];
type Data = Bucket[][];

class HashTable {
  data: Data;

  constructor(size: number) {
    this.data = new Array<Bucket[]>(size);
  }

  _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, value: number) {
    const hash = this._hash(key);
    if(!this.data[hash]) {
      this.data[hash] = []; 
    }
    this.data[hash].push([key, value]);
  }

  get(key: string): number | null {
    const VALUE = 1;
    const hash = this._hash(key);
    const buckets = this.data[hash];
    if (!buckets) {
      return null;
    }
    const bucket = buckets.find(([k]) => k === key);
    return bucket ? bucket[VALUE] : null;
  }

  keys(): string[] {
    const result: string[] = [];

    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        this.data[i].forEach(([key]) => result.push(key));
      }
    }

    return result;
  }
}

export default HashTable;
