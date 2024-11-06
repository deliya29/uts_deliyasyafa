// Mengimpor controller mahasiswa
import { createMahasiswa, getMahasiswa, updateMahasiswa, deleteMahasiswa } from '../controllers/mahasiswaController.js';

// Membuat router Express
import express from 'express';
const router = express.Router();

// Menambahkan rute untuk mahasiswa
router.post('/mahasiswa', createMahasiswa);
router.get('/mahasiswa', getMahasiswa);
router.put('/mahasiswa/:npm', updateMahasiswa);
router.delete('/mahasiswa/:npm', deleteMahasiswa);

export default router;
