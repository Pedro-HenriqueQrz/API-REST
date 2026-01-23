import { StatusCodes } from 'http-status-codes'
import {testServer} from '../jest.setup'

describe('Cidades - Create', () => {

    it('Cria registro', async () => {
        const result = await testServer
        .post('/cidades')
        .send({nome: "Cidade de Deus"})

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof result.body).toEqual('number');
    })

    it('Falha ao criar com nome vazio', async () => {
        const result = await testServer
        .post('/cidades')
        .send({nome: ""})

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    })

    it('Falha ao criar com nome menor que 3 caracteres', async () => {
        const result = await testServer
        .post('/cidades')
        .send({nome: "AB"})

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.nome');
    })

    it('Falha ao criar sem enviar nome', async () => {
        const result = await testServer
        .post('/cidades')
        .send({})

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty('errors.body.nome')
    })

    it('Cria registro com nome válido de 3 caracteres', async () => {
        const result = await testServer
        .post('/cidades')
        .send({nome: "São Paulo"})

        expect(result.statusCode).toEqual(StatusCodes.CREATED);
    })
})