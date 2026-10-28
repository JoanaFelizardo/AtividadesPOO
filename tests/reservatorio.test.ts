import {describe, it, expect} from "vitest";
import {ReservatorioAgua} from "../src/reservatorio";

describe ("Reservatorio de Agua - Exercicio 4", () => {

    it ("Deve inicializar o reservatório e calcular o percentual", () => {
        const reservatorio = new ReservatorioAgua(100);

        expect(reservatorio.capacidadeMAX).toBe(100);
        expect(reservatorio.volumeAtual).toBe(0);
        expect(reservatorio.estarVazio()).toBe(true);

        reservatorio.adicionarAgua(50);
        expect(reservatorio.calcularPercentualOcupado()).toBe(50);
        expect(reservatorio.estarVazio()).toBe(false);

        reservatorio.adicionarAgua(50);
        expect(reservatorio.estaCheio()).toBe(true);

    })
    it ("Nao deve tentar armazenar mais agua que a capacidade maxima", () =>{
        const reservatorio = new ReservatorioAgua(100);


        expect(() => reservatorio.adicionarAgua(150)).toThrow("Não pode ultrapassar a capacidade maxima.");
        expect(reservatorio.volumeAtual).toBe(0);
    })

    it ("Não deve retirar uma quantidade maior do que o volume existente", () => {
        const reservatorio = new ReservatorioAgua(100);
        reservatorio.adicionarAgua(30);

        expect(() => reservatorio.retirarAgua(50)).toThrow("Quantidade a retirar é maior que o volume atual");
        expect(reservatorio.volumeAtual).toBe(30);
    })

    it ("Nao deve adicionar ou retirar valores menores ou iguais a zero", () => {
       expect(() => new ReservatorioAgua(0)).toThrow("A capacidade máxima deve ser maior que zero.");
       expect(() => new ReservatorioAgua(-1)).toThrow("A capacidade máxima deve ser maior que zero");

    })



})