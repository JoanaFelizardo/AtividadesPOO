import {describe, it, expect} from "vitest";
import {Lampada} from "../src/lampada";

// agrupa todos os testes relacionados a classe
describe ("Lampada", () => {

    // instanciar duas lampadas
    it ("Deve instanciar duas lâmpadas e inicializar uma com 9W e a outra com 15W", () => {
        const lampada1 = new Lampada(9);
        const lampada2 = new Lampada(15);

        expect(lampada1).toBeDefined;
        expect(lampada2).toBeDefined;

    });

    it ("Deve ligar apenas uma lampada e apos exibir o estado das duas lampadas", () => {
        const lampada1 = new Lampada(9);
        const lampada2 = new Lampada(15);

        lampada1.ligarLampada();

        expect(lampada1.estarLampada()).toBeDefined
        expect(lampada2.estarLampada()).toBeDefined
    });

   

})
