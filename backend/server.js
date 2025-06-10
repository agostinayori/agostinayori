const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulación de base de datos (por ahora)
let likes = 0;

// Obtener cantidad de likes
app.get('/likes', (req, res) => {
  res.json({ likes });
});

// Sumar un like
app.post('/likes', (req, res) => {
  likes++;
  res.json({ likes });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
