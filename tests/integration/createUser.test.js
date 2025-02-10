const chai = require('chai')
const { expect } = chai
const sinon = require('sinon')
const app = require('../../src/app')

const chaiHttp = require('chai-http')
const connection = require('../../src/databases/connection')
chai.use(chaiHttp)

//Metodo POST /user - Quando alguem é cadastrado, buscado, etc é usado o metodo POST
// então ele será testado 
describe('Teste de integrção user - Teste do método POST na rota /user', function() {
    it('Deve cadastrar um usuario com sucesso, quando passado um body valido', async function() {
        const body = {fullName: 'Mateus', nickname: 'Mat'}
        const output = {id: 67, ...body}

        sinon.stub(connection, 'execute').resolves([{insertId: 67}])

        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(201)
        expect(response.body).to.be.deep.equal(output)
    });

    it('Deve receber status 400 e uma mensagem de erro, quando fullName nao for enviado', async function() {
        const body = {nickname: 'Mat'} // faltando fullName

        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Full name é um campo obrigatório')
    });

    it('Deve receber status 400 e uma mensagem de erro, quando nickname nao for enviado', async function() {
        const body = {fullName: 'Mateus'} // faltando nick

        const response = await chai.request(app).post('/user').send(body)

        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Nickname é um campo obrigatório')
    });
});