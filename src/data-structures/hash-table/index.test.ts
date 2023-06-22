import HashTable from './index';

describe('HashTable', () => { 
  let hashTable: HashTable;
  const key = 'grapes';
  const value = 100;

  beforeEach(() => {
    hashTable = new HashTable(20);
  })

  it('should add a new key-value pair', () => {
    const hash = hashTable._hash(key);
    hashTable.set(key, value);
    expect(hashTable.data[hash]).toEqual([[key, value]]);
  });

  it('should retrieve a value using its key', () => {
    hashTable.set(key, value);
    expect(hashTable.get(key)).toEqual(value);
  });

  it('should retrieve all the keys', () => {
    hashTable.set('banana', 5);
    hashTable.set('apple', 2);
    hashTable.set('orange', 4);
    expect(hashTable.keys()).toEqual(['apple', 'banana', 'orange']);
  });



 })



