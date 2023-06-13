const Nota = require('../../../src/models/nota');

describe("testando função mediaCA", () => {
    test('Retorna SS quando a media for entre 9 e 10', () => {
        const nota = new Nota ('Português', 9, 9.5, 10);
        expect(nota.mediaCA()).toBe('SS');
    });
    test('Retorna MS quando a media for entre 7 e 9', () => {
        const nota = new Nota ('Português', 7, 8, 9);
        expect(nota.mediaCA()).toBe('MS');
    });
    test('Retorna MM quando a media for entre 5 e 7', () => {
        const nota = new Nota ('Português', 5, 6, 7);
        expect(nota.mediaCA()).toBe('MM');
    });
    test('Retorna MI quando a media for entre 3 e 5', () => {
        const nota = new Nota ('Português', 3, 4, 5);
        expect(nota.mediaCA()).toBe('MI');
    });
    test('Retorna II quando a media for entre 0.1 e 3', () => {
        const nota = new Nota ('Português', 0.5, 2, 3);
        expect(nota.mediaCA()).toBe('II');
    });
    test('Retorna SR quando a media for 0', () => {
        const nota = new Nota ('Português', 0, 0, 0);
        expect(nota.mediaCA()).toBe('SR');
    });
}) 