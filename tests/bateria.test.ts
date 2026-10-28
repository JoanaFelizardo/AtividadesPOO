import {describe, it, expect} from "vitest";
import {BateriaRecarregavel} from "../src/bateria";

describe ("Bateria recarregavel - Exercicio 4", () => {
    
    it ("Deve inicializar a bateria totalmente carregada", () => {
        const bateria = new BateriaRecarregavel(4000);

        expect(bateria.capacidadeMAX).toBe(4000);
        expect(bateria.cargaAtual).toBe(4000);

        expect(bateria.estaCompletamenteCarregada()).toBe(true);
        expect(bateria.estaDescarregada()).toBe(false);

    });

    it ("Nao deve permitir criar bateria com capacidade zerada ou negativa", () => {
        expect(() => new BateriaRecarregavel(0)).toThrow("A capacidade máxima deve ser maior que zero");
        expect(() => new BateriaRecarregavel(-100)).toThrow("A capacidade máxima deve ser maior que zero");
    });

    it ("Deve consumir e recarregar a carga corretamente", () => {
        const bateria = new BateriaRecarregavel(5000);

        bateria.consumirBateria(2000);
        expect(bateria.cargaAtual).toBe(3000);

        bateria.carregarBateria(1000);
        expect(bateria.cargaAtual).toBe(4000);
    });

    it ("Deve calcular o percentual de carga disponivel", () => {
            const bateria = new BateriaRecarregavel(2000);

            bateria.consumirBateria(1000);
            expect(bateria.calcularPercentualCarga()).toBe(50);
    });

    it ("Não deve permitit que a carga fique abaixo de zero", () => {
        const bateria = new BateriaRecarregavel(3000);

        expect(() => bateria.consumirBateria(4000)).toThrow("A carga não pode ficar abaixo de zero");
        expect(bateria.cargaAtual).toBe(3000);
    });

    it("Não deve permitir que a carga ultrapasse a capacidade máxima", () => {
        const bateria = new BateriaRecarregavel (4000);

        bateria.consumirBateria(1000);

        expect(() => bateria.carregarBateria(2000)).toThrow("A quantidade de carga não pode ultrapassar a capacidade máxima");
        expect(bateria.cargaAtual).toBe(3000);
    });

    it ("Não deve permitir consumir ou recarregar valores menores ou iguais a zero", () =>{
        const bateria = new BateriaRecarregavel(4000);

        expect(() => bateria.consumirBateria(0)).toThrow("A quantidade deve ser maior que zero");
        expect(() => bateria.carregarBateria(-1000)).toThrow("A quantidade deve ser maior que zero");
    });


})