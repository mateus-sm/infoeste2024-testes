import { expect } from "chai";
import { evaluateStudent } from "../src/school2.js";

describe('Teste na função evaluateStudent:', () => {
    it('Deve retornar "Invalid name" caso nome não for string', () => {
        const resultado = evaluateStudent(1, 10, 10);
        expect(resultado).to.be.equals('Invalid name')
    });
    it('Deve retornar "Invalid name" caso nome for menor do que 3 caracteres', () => {
        const resultado = evaluateStudent('', 10, 10);
        expect(resultado).to.be.equals('Invalid name')
    });
    it('Deve retornar "Invalid grade" caso primeira nota não for numero', () => {
        const resultado = evaluateStudent('Mateus', 'a', 10);
        expect(resultado).to.be.equals('Invalid grade')
    });
    it('Deve retornar "Invalid grade" caso segunda nota não for numero', () => {
        const resultado = evaluateStudent('Mateus', 10, 'a');
        expect(resultado).to.be.equals('Invalid grade')
    });
    it('Deve retornar "Invalid grade" caso a primeira nota for negativa', () => {
        const resultado = evaluateStudent('Mateus', -10, 10);
        expect(resultado).to.be.equals('Invalid grade')
    });
    it('Deve retornar "Invalid grade" caso a segunda nota for negativa', () => {
        const resultado = evaluateStudent('Mateus', 10, -10);
        expect(resultado).to.be.equals('Invalid grade')
    });
    it('Deve retornar "Approved" caso media for maior que 6', () => {
        const resultado = evaluateStudent('Mateus', 10, 10);
        expect(resultado).to.be.equals('Approved')
    });
    it('Deve retornar "Retained" caso media for menor que 6', () => {
        const resultado = evaluateStudent('Mateus', 5.5, 5.5);
        expect(resultado).to.be.equals('Retained')
    });
});