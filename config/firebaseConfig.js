import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';

// Membaca file JSON kredensial Firebase
const serviceAccount = JSON.parse(readFileSync(path.resolve('config/uts-deliyasyafa-firebase-adminsdk-z3iak-4eb10da02f.json'), 'utf8'));

// Inisialisasi Firebase Admin SDK dengan kredensial
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uts-deliyasyafa-default-rtdb.firebaseio.com" // Ganti dengan URL Firebase Realtime Database Anda
});

// Mendapatkan referensi ke database Firebase
const db = admin.database();

// Mengekspor db untuk digunakan di file lain
export default db;
