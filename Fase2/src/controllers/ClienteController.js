// Importando Funções

import { buscarTodos as _buscarTodos, 
         buscarUm as _buscarUm, 
         inserir as _inserir, 
         alterar as _alterar, 
         excluir as _excluir } from '../services/ClienteService.js';

// Exporta as funções (Controladores) "Lado do cliente" "Lado de colocar as informações"

// Função de busca de todos os clientes

export async function buscarTodos(req, res) {
    const json = { error: '', result: [] };

    const clientes = await _buscarTodos();

    for (let i in clientes) {
        json.result.push({
            codigo: clientes[i].Id_Cliente,
            nome: clientes[i].Nome_Cliente,
            cidade: clientes[i].Cidade,
            estado: clientes[i].Estado,
            pais: clientes[i].Pais
        });
    }
    res.json(json);
} // Função de busca de somente um cliente
export async function buscarUm(req, res) {
    let json = { error: '', result: {} };

    let id_cliente = req.params.Id_Cliente;
    let cliente = await _buscarUm(id_cliente);

    if (cliente) {
        json.result = cliente;
    }
    res.json(json);
} // função de inserir novo cliente
export async function inserir(req, res) {
    let json = { error: '', result: {} };

    let codigo = req.body.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

    if (codigo && nome && segmento && cidade && estado && pais
        && mercado && regiao) {
        let cliente = await _inserir(codigo, nome, segmento, cidade,
            estado, pais, mercado, regiao);
        json.result = {
            cliente: codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    }
    else {
        json.error = 'Erro no envio dos dados';
    }

    res.json(json);
} // Função de alterar cliente
export async function alterar(req, res) {
    let json = { error: '', result: {} };

    let codigo = req.params.Id_Cliente;
    let nome = req.body.Nome_Cliente;
    let segmento = req.body.Segmento;
    let cidade = req.body.Cidade;
    let estado = req.body.Estado;
    let pais = req.body.Pais;
    let mercado = req.body.Mercado;
    let regiao = req.body.Regiao;

    if (codigo && nome && segmento && cidade && estado && pais
        && mercado && regiao) {
        await _alterar(codigo, nome, segmento, cidade,
            estado, pais, mercado, regiao);
        json.result = {
            codigo,
            nome,
            segmento,
            cidade,
            estado,
            pais,
            mercado,
            regiao
        };
    }
    else {
        json.error = 'Erro no envio dos dados';
    }

    res.json(json);
} // Função de excluir cliente
export async function excluir(req, res) {
    let json = { error: '', result: {} };

    let id_cliente = req.params.Id_Cliente;
    let cliente = await _excluir(id_cliente);

    if (cliente) {
        json.result = cliente;
    }
    res.json(json);
}