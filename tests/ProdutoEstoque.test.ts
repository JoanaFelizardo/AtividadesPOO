import {describe, it, expect} from "vitest";
import {ProdutoEstoque} from "../src/ProdutoEstoque";

describe("Produto em Estoque - Exercicio 7", () => {

    it ("Deve inicializar o produdo", () => {
        const produto = new ProdutoEstoque ("Teclado", 20, 5);

        expect(produto.nome).toBe("Teclado");
        expect(produto.quantidadeArmazenada).toBe(20);
        expect(produto.estoqueMIN).toBe(5);
    });

    it ("Não se deve criar produto com nome vazio ou estoque minimo inválido", () => {
        expect(() => new ProdutoEstoque("", 10, 5)).toThrow("O nome do produto é obrigatório");
        expect(() => new ProdutoEstoque("Mouse", -1, 5)).toThrow("A quantidade não pode ser negativa");
        expect(() => new ProdutoEstoque("Mouse", 10, 0)).toThrow("O estoque mínimo deve ser maior que zero");
    });

    it("Deve registrar a entrada de unidades corretamente", () => {
        const produto = new ProdutoEstoque ("Teclado", 20, 5);

        produto.registrarEntrada(5)

        expect(produto.quantidadeArmazenada).toBe(25);
    });

    it ("Deve registrar saída de unidades com sucesso", () => {
        const produto = new ProdutoEstoque ("Teclado", 20, 5);

        produto.registrarSaida(5);

        expect(produto.quantidadeArmazenada).toBe(15);
    });

    it("Não deve permitir registrar entrada ou saida com valores menores ou iguais a zero", () => {
        const produto = new ProdutoEstoque ("Teclado", 20, 5);

        expect(() => produto.registrarEntrada(0)).toThrow("A quantidade deve ser maior que zero");
        expect(() => produto.registrarSaida(-2)).toThrow("A quantidade deve ser maior que zero");

    });

    it("Não se deve permitir saída maior que a quantidade disponivel", () =>{
         const produto = new ProdutoEstoque ("Teclado", 20, 5);

         expect(()=> produto.registrarSaida(50)).toThrow("Quantidade insufiente no estoque");
         expect(produto.quantidadeArmazenada).toBe(20);
    });

    it("Deve verificar necessidade d ereposição e exibir a situação do estoque", () => {
        const produto = new ProdutoEstoque ("Teclado", 10, 5);

        expect(produto.precisaReposicao()).toBe(false);
        expect(produto.exibirSituacaoEstoque()).toBe("Estoque Regular");

        produto.registrarSaida(8);
        expect(produto.quantidadeArmazenada).toBe(2);

        expect(produto.precisaReposicao()).toBe(true);
        expect(produto.exibirSituacaoEstoque()).toBe("Reposição Necessária");
    })

})