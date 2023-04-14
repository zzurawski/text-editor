import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const JATEdb = await openDB('JATE', 1.0);
  const transaction = JATEdb.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');
  const req = await store.put({id: 1, value: content});

  return req;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jate = await openDB('jate', 1);
  const trans = jate.transaction('jate', 'readwrite');
  const store = await trans.store('jate');
  const req = await store.put({id: 1, value: content})

  return req;
};

initdb();
