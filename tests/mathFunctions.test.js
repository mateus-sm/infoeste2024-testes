/*
  - Mocha permite organizar e estruturar seus testes com os blocos describe e it. 
    - O "describe" é usado para agrupar testes relacionados, enquanto o "it" define testes individuais.
  
  - Chai é responsável pelas asserções, e expect é uma das formas de expressá-las. 
    - Com "expect", você verifica se o código está se comportando como esperado.
*/

import { expect } from 'chai';
import { div, mul, sub, sum } from '../src/mathFunctions.js'

describe('Teste na função SUM:', () => {
	it('Deve retornar a soma de dois numeros', () => {
		const resultado = sum(2, 3);
		expect(resultado).to.equals(5);
	});
	it('Deve retornar a subtração de dois numeros', () => {
		const resultado = sub(2, 3);
		expect(resultado).to.equals(-1);
	});
	it('Deve retornar a multiplicação de dois numeros', () => {
		const resultado = mul(2, 3);
		expect(resultado).to.equals(6);
	});
	it('Deve retornar a divisão de dois numeros', () => {
		const resultado = div(2, 3);
		expect(resultado).to.be.closeTo(0.66, 0.01);
	});
});