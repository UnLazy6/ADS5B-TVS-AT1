
const dadosEstudante = require('./dadosEstudante');

describe('Teste da função recebeDados', () => {
  test('Verifica se a função processa corretamente o nome "Caio Victor Dantas Oliveira" e o RA "181960"', () => {
    const nome = "Caio Victor Dantas Oliveira";
    const RA = "181960";
    const esperado = `Dados recebidos - Nome: ${nome}, RA: ${RA}`;

    expect(dadosEstudante(nome, RA)).toBe(esperado);
  });
});
