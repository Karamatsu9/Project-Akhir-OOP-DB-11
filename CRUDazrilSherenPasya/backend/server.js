// server.js
const express = require('express');
const cors = require('cors');
let connection = require("./config/database");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('project kehubung');
});

app.put('/api/siswa/:id', (req, res) => {
    const siswaID = req.params.id;
    const {
        nama,
        NISN,
        umur,
        hobi,
        status
    } = req.body;

    const sql = `
        UPDATE siswa SET
            nama = ?,
            NISN = ?,
            umur = ?,
            hobi = ?,
            status = ?
        WHERE id = ?
    `;

    connection.query(sql, [nama, NISN, umur, hobi, status, siswaID], (err, result) => {
        if (err) {
            console.error("Database update error:", err);
            res.status(500).send("Update failed");
        } else {
            res.status(200).send("Product updated successfully!");
        }
    });
});

app.get('/api/siswa', (req, res) => {
    connection.query('SELECT * FROM siswa', (err, results) => {
        if (err) {
            console.error("Database fetch error:", err);
            res.status(500).send("Fetch failed");
        } else {
            res.json(results);
        }
    });
});

app.post('/api/siswa', (req, res) => {
    const {
        nama,
        NISN,
        umur,
        hobi,
        status
    } = req.body;

    const sql = `
        INSERT INTO siswa 
        (nama, NISN, umur, hobi, status) 
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(sql, [nama, NISN, umur, hobi, status], (err, result) => {
        if (err) {
            console.error("Database insert error by:", err);
            res.status(500).send("Insert failed");
        } else {
            res.status(200).send("Product added success!");
        }
    });
});

// DELETE route to remove a siswa by ID
app.delete('/api/siswa/:id', (req, res) => {
    const siswaID = req.params.id;

    const sql = `
        DELETE FROM siswa WHERE id = ?
    `;

    connection.query(sql, [siswaID], (err, result) => {
        if (err) {
            console.error("Database delete error:", err);
            res.status(500).send("Delete failed");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Siswa not found");
        } else {
            res.status(200).send("Siswa deleted successfully!");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
