const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../src/services/user');
const model = require('../../../src/models/user')

// fullName: 40 < length >= 3  
// nickname: 40 < length >= 3
describe('Service user - Teste da função create:', function() {
    it('Deve cadastrar um usuario com sucesso, quando passado um input valido', async function() {
        const input = {
            fullName: 'Mateus',
            nickname: 'Mat'
        }
        const output = {
            id: 67,
            fullName: 'Mateus',
            nickname: 'Mat'
        }

        //É necessario fazer o stub da model.
        //Ordem: Controlers -> Service -> Model -> Banco de dados
        sinon.stub(model, 'create').resolves(output)

        const result = await service.create(input);
        expect(result).to.be.deep.equal(output)

        sinon.restore()
    });

    it('Deve retornar "fullName errado!...", quando fullName tiver menos de 3 caracteres', async function() {
        const input = {
            fullName: 'Ma', //fullName não cumpre requisito
            nickname: 'Mat'
        }

        //Não é necessario fazer o stub da model, pois se o input esta errado nao deve-se executar a model
        //Ordem: Controlers -> Service -> Model -> Banco de dados
        try {
            await service.create(input);
        } catch (error) {
            expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
        }
    });

    it('Deve retornar "fullName errado!...", quando fullName tiver mais de 40 caracteres', async function() {
        const input = {
            fullName: 'Maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', //fullName > 40
            nickname: 'Mat'
        }

        //Não é necessario fazer o stub da model, pois se o input esta errado nao deve-se executar a model
        //Ordem: Controlers -> Service -> Model -> Banco de dados
        try {
            await service.create(input);
        } catch (error) {
            expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
        }
    });

    it('Deve retornar "nickname errado!...", quando nickname tiver menos de 3 caracteres', async function() {
        const input = {
            fullName: 'Mateus', 
            nickname: 'Ma' //nickname < 3
        }

        try {
            await service.create(input);
        } catch (error) {
            expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
        }
    });

    it('Deve retornar "nickname errado!...", quando nickname tiver mais de 8 caracteres', async function() {
        const input = {
            fullName: 'Mateus', 
            nickname: 'Maaaaaaaaaaaa' //nickname > 8
        }

        try {
            await service.create(input);
        } catch (error) {
            expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
        }
    });
});