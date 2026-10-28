import {describe, it, expect} from "vitest"
import {Aluno} from "../src/aluno";

describe ("Aluno - Exercicio 6", () => {

    it ("Deve inicializar o aluno com zero faltas", () =>{
        const aluno = new Aluno ("João", 7.0, 8.0);

        expect(aluno.nome).toBe("João");
        expect(aluno.primeiraNota).toBe(7.0);
        expect(aluno.segundaNota).toBe(8.0);
        expect(aluno.quantidadeFaltas).toBe(0);

    });

    it ("Não deve permitir criar aluno com notas inválidas", () =>{
        expect(() => new Aluno ("Ana", -1, 8)).toThrow("A primeira nota deve estar entre 0 e 10");
        expect(() => new Aluno ("Ana", 7, 11)).toThrow("A segunda nota deve estar entre 0 e 10");
    });

    it ("Deve calular a media do aluno", () => {
        const aluno = new Aluno ("Paola", 8.0, 9.0);

        expect(aluno.calcularMedia()).toBe(8.5);
    });

    it ("Deve registrar faltas incrementando uma por uma", () => {
        const aluno = new Aluno("Jão", 9.0, 9.0);

        aluno.registrarFalta();
        aluno.registrarFalta();

        expect(aluno.quantidadeFaltas).toBe(2);
    });

    it ("Deve ser aprovado quando a media é >= 6 e possui até 10 faltas", () => {
        const aluno = new Aluno("Jão", 9.0, 9.0);

        expect(aluno.calcularMedia()).toBe(9.0);

    });

    it("Deve ser reprovado se a média for < 6 e a quantidade de faltas for > 10", () => {
         const aluno = new Aluno("Jão", 5.0, 4.0);

         for (let i = 0; i < 11; i++){
            aluno.registrarFalta();
         }

         expect(aluno.quantidadeFaltas). toBe(11);
         expect(aluno.verificarAprovado()).toBe(false);
         expect(aluno.excibirSituacaoAcademica()).toBe("Reprovado");

    });





});