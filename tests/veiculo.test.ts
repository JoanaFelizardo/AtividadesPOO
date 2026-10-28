import {describe, it, expect} from "vitest";
import {Veiculo} from "../src/veiculo";

describe ("Veículo - Exercício 8", () => {

    it ("Deve iniciar corretamente o veículo", () => {
        const veiculo = new Veiculo("Fiat");

        expect(veiculo.modelo).toBe("Fiat");
        expect(veiculo.velocidadeAtual).toBe(0);
        expect(veiculo.estado).toBe(false);

    });

    it("Não deve permitir criar vaículo com modelo vazio", () => {
        expect(() => new Veiculo("")).toThrow("O modelo é obrigatório")
    });

    it("Deve ligar e acelerar de 10 em 10km/h quando ligado", () => {
        const veiculo = new Veiculo("Fiat");

        veiculo.ligarVeiculo();
        expect(veiculo.estado).toBe(true);

        veiculo.Acelerar();
        expect(veiculo.consultarVelocidade()).toBe(10);

        veiculo.Acelerar();
        expect(veiculo.consultarVelocidade()).toBe(20);
    });

    it("Não deve permitir acelerar quando estiver desligado", () => {
         const veiculo = new Veiculo("Fiat");

         expect(() => veiculo.Acelerar()).toThrow("O veiculo precisa estar ligado para acelerar");
         expect(veiculo.velocidadeAtual).toBe(0);
    });

    it ("Deve frear reduzindo a velocidade de 10 em 10km/h", () => {
         const veiculo = new Veiculo("Fiat");
        veiculo.ligarVeiculo();
        veiculo.Acelerar();
        veiculo.Acelerar();

        veiculo.frear();
        expect(veiculo.consultarVelocidade()).toBe(10);

    });

    it("Não deve permitir desligar o veiculo em movimento", () => {
        const veiculo = new Veiculo("Fiat");
        veiculo.ligarVeiculo();
        veiculo.Acelerar();

        expect(() => veiculo.desligarVeiculo()).toThrow("O veiculo só pode ser desligado quando estiver parado");
        expect(veiculo.estado).toBe(true);
    });

    it ("Deve desligar o veiculo com sucesso quando estiver parado", () => {
        const veiculo = new Veiculo("Fiat");
        veiculo.ligarVeiculo();

        veiculo.desligarVeiculo();
        expect(veiculo.estado).toBe(false);
    });
    
    it("Deve exibir o estado do veiculo corretamente", () => {
        const veiculo = new Veiculo("Fiat");

        expect(veiculo.exibirEstado()).toBe("O carro está desligado");

        veiculo.ligarVeiculo();
        veiculo.Acelerar();

        expect(veiculo.exibirEstado()).toBe("O carro está ligado");
    });



})