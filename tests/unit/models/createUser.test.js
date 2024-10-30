const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/user')
const connection = require('../../../src/databases/connection');

describe('Model user  - Teste da função create:', function() {
    it('Deve cadastrar um usuario com sucesso', async function() {
        const input = {
            fullName: 'Mateus',
            nickname: 'Mat'
        }
        const output = {
            id: 67,
            fullName: 'Mateus',
            nickname: 'Mat'
        }

        //Quando a conexão for executar "execute" substitui execute
        // por um return de ID.
        //Altera o comportamento da funcionalidade
        sinon.stub(connection, 'execute').returns([{insertId: 67}])

        //await necessita a funçao ser assincrona, async
        const result = await model.create(input)

        expect(output).to.have.property('id')
        expect(output).to.have.property('fullName')
        expect(output).to.have.property('nickname')
        expect(result).to.deep.equal(output)
        
        //Encerra o sinon para nao dar conflito nas chamadas futuras
        sinon.restore();
    });
});