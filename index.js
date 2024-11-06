const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const serviceAccount = require("./config/firebaseConfig.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://uts-deliyasyafa-default-rtdb.firebaseio.com",
});

const app = express();
app.use(bodyParser.json());
app.use("/mahasiswa", mahasiswaRoutes);

app.listen(3000, () => console.log("Server berjalan di port 3000"));
