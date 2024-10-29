import { expect } from "chai";
import { isApproved } from "../src/school.js";

describe('Teste na funçao isApproved:', () => {
    it('Deve retornar "true" ao passar notas 10 e 10', () => {
        const resultado = isApproved(10, 10);
        expect(resultado).to.be.true;
    });
    it('Deve retornar "false" ao passar notas 0 e 0', () => {
        const resultado = isApproved(0, 0);
        expect(resultado).to.be.false;
    });
    it('Deve retornar "true" ao passar notas 6,5 e 6,5', () => {
        const resultado = isApproved(6.5, 6.5);
        expect(resultado).to.be.true;
    });
    it('Deve retornar "true" ao passar notas 6 e 6', () => {
        const resultado = isApproved(6, 6);
        expect(resultado).to.be.true;
    });
    it('Deve retornar "false" ao passar notas 5,5 e 5,5', () => {
        const resultado = isApproved(5.5, 5.5);
        expect(resultado).to.be.false;
    });
    it('Deve retornar "false" ao passar notas negativas', () => {
        const resultado = isApproved(-1, -2);
        expect(resultado).to.be.false;
    });
    it('Deve retornar "false" ao passar nota e um caracter', () => {
        const resultado = isApproved(-1, 'A');
        expect(resultado).to.be.false;
    });
});