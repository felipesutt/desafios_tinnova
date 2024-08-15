const express = require('express');
const cors = require('cors');
const database = require('./services/database.js');

const app = express();


app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

// Retorna todos os veiculos
app.get('/veiculos', (req, res) => {
    database.pool.query('SELECT * FROM veiculos').then((result) =>{
        return res.status(200).json(result.rows)
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})

// TA ERRADO MECHER DEPOIS
// Retorna veiculos com base nos filtros desejados 
app.get('/veiculos/:id/:marca/:ano/:vendido', (req, res) => {
    database.pool.query('SELECT * FROM veiculos WHERE id=' + req.params.id + ' AND marca=' + req.params.marca + ' AND ano=' + req.params.ano + ' AND vendido=' + req.params.vendido + ';').then((result) =>{
        return res.status(200).json(result.rows)
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})

// Retorna um veiculo pelo id
app.get('/veiculos/:id', (req, res) => {
    database.pool.query('SELECT * FROM veiculos WHERE id=' + req.params.id + ';').then((result) =>{
        return res.status(200).json(result.rows)
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})

// MECHER DEPOIS
// Cria um veiculo no banco de dados
app.post('/veiculos', (req, res) => {
    var vendido;
    if(req.body.vendido == "false"){
        vendido = false
    }
    else if (req.body.vendido == "true"){
        vendido = true
    }
    database.pool.query(
        "INSERT INTO veiculos (veiculo, marca, ano, descricao, vendido, created, updated) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",
        [req.body.veiculo, req.body.marca, req.body.ano, req.body.descricao, vendido]
    ).then((result) =>{
        return res.status(200).json({ message: 'Veiculo cadastrado com sucesso!'})
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})

app.patch('/veiculos/:id', (req, res) => {
    var vendido;
    if(req.body.vendido == "false"){
        vendido = false
    }
    else if (req.body.vendido == "true"){
        vendido = true
    }
    console.log(req.body.veiculo, req.body.marca, req.body.ano, req.body.descricao, vendido, req.body.id);
    database.pool.query(`UPDATE veiculos SET veiculo = $1, marca = $2, ano = $3, descricao = $4, vendido = $5, updated = CURRENT_TIMESTAMP WHERE id = $6`,
                        [req.body.veiculo, req.body.marca, req.body.ano, req.body.descricao, vendido, req.params.id]
    )
    .then((result) =>{
        return res.status(200).json({ message: 'Veiculo editado com sucesso!'})
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})

// Deleta um veiculo do banco de dados
app.delete('/veiculos/:id', (req, res) => {
    database.pool.query('DELETE FROM veiculos WHERE id=' + req.params.id + ';')
    .then((result) =>{
        return res.status(200).json({ message: 'Veiculo deletado com sucesso!'})
    }).catch((error) => {
        return res.status(500).json({ error: error.message })
    })
})


app.listen(3000, () => {
    console.log("Server started at port 3000")
})