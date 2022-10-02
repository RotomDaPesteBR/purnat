import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  databaseURL: 'https://purnat-5bf16-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
