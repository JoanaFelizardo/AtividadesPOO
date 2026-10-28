import {describe, it, expect} from "vitest";
import {Retangulo} from "../src/retangulo";

    describe ("Retangulo - Exercicio 2", () =>{


        it ("Deve criar um retângulo com base 10 e altura 5", () => {
            const retangulo = new Retangulo (10, 5);

            expect(retangulo.base).toBe(10);
            expect(retangulo.altura).toBe(5);

            expect(retangulo.calcularArea()).toBe(50);
            expect(retangulo.calcularPerimetro()).toBe(30);

            expect(retangulo.eQuadrado()).toBe(false);

        });

        it("Deve criar outro objeto com base 7 e altura 7", () => {
            const retangulo = new Retangulo(7,7);

            expect(retangulo.eQuadrado()).toBe(true);
        });



    })