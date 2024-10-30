const sinon = require('sinon');
const { expect } = require('chai');
const controller = require('../../../src/controllers/user')
const service = require('../../../src/services/user')


describe('Controler user - Teste da função create:', function() {
    //beforeAll
    //afterAll

    beforeEach(() => {
        req = {
            body: {
                fullName: 'Mateus',
                nickname: 'Mat'
            } 
        };
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
        next = sinon.stub()
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Deve cadastrar um usuario com sucesso', async function() {
        const output = {fullName: 'Mateus', nickname: 'Mat'}

        //Resolves serve para chamadas assincronas
        sinon.stub(service, 'create').resolves({fullName: 'Mateus', nickname: 'Mat'})

        await controller.create(req, res, next)

        expect(res.status.calledWith(201)).to.be.true
        expect(res.json.calledWith(output)).to.be.true

    });

    it('Deve chamar next com erro em caso de falha', async function() {
        const error = new Error('Erro ao cadastrar usuario')

        sinon.stub(service, 'create').rejects(error)

        await controller.create(req, res, next)
        expect(next.calledWith(error)).to.be.true
    });
});