import express from 'express';
import mahasiswaRoutes from './routes/mahasiswaRoutes.js'; // Mengimpor rute mahasiswa

const app = express();

// Middleware untuk parsing request body (JSON)
app.use(express.json());

// Menggunakan rute mahasiswa
app.use(mahasiswaRoutes);

// Menentukan port untuk aplikasi
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
