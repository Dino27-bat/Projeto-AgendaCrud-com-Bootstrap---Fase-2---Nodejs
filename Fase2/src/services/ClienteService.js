import db from '../db.js';

// Exporta os dados das funções (controladores)

// Realiza uma consulta para selecionar todos os registros de clientes

export function buscarTodos() {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes', (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}
// Realiza uma consulta para buscar um cliente (ID)
export function buscarUm(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('SELECT * FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            if (results.length > 0) {
                aceito(results[0]);
            } else {
                aceito(false);
            }
        });
    });
}
// Realiza uma consulta para inserir um novo cliente
export function inserir(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {
        db.query('INSERT INTO clientes (Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results.insertId_Cliente);
            }
        );
    });
}
// Realiza uma consulta para alterar dados de um cliente (ID)
export function alterar(Id_Cliente, Nome_Cliente, Segmento, Cidade,
    Estado, Pais, Mercado, Regiao) {
    return new Promise((aceito, rejeitado) => {

        db.query('UPDATE clientes SET Nome_Cliente= ?, Segmento = ?, Cidade = ?, Estado = ?, Pais = ?, Mercado = ?, Regiao = ? Where Id_Cliente = ? ',
            [Id_Cliente, Nome_Cliente, Segmento, Cidade, Estado, Pais, Mercado, Regiao],
            (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            }
        );
    });
}
// Realiza uma consulta para excluir um cliente
export function excluir(Id_Cliente) {
    return new Promise((aceito, rejeitado) => {
        db.query('DELETE FROM clientes WHERE Id_Cliente = ?', [Id_Cliente], (error, results) => {
            if (error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}