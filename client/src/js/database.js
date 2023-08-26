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
  console.log("Update database");

  // Creates connection to the database and version we want to use
  const textDb = await openDB("jate", 1);

  // Creates new transaction,specifies database and data privileges
  const tx = textDb.transaction("jate", "readwrite");

  // Opens desired object store
  const store = tx.objectStore("jate");

  // content passed in
  const request = store.put({ id: 1, value: content });

  // Confirmation of  request
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Creates connection to the database and version we want to use
  const textDb = await openDB("jate", 1);

  // Creates new transaction,specifies database and data privileges
  const tx = textDb.transaction("jate", "readonly");

  // Opens up  desired object store
  const store = tx.objectStore("jate");

  // get stored data
  const request = store.get(1);

  // Confirmation of  request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
