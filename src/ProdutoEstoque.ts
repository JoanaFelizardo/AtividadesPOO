export class ProdutoEstoque {
    private _nome: string;
    private _quantidadeArmazenada: number;
    private _estoqueMIN: number;

    constructor(nome: string, quantidadeArmazenada: number, estoqueMIN: number){
        if (!nome || nome.trim() === ""){
            throw new Error ("O nome do produto é obrigatório");
        }

        if (quantidadeArmazenada < 0){
            throw new Error("A quantidade não pode ser negativa");
        }

        this.validarMedida(estoqueMIN, "O estoque mínimo deve ser maior que zero");

        this._nome = nome;
        this._quantidadeArmazenada = quantidadeArmazenada;
        this._estoqueMIN = estoqueMIN;
    }

    public validarMedida(valor: number, mensagem: string): void{
        if (valor <= 0){
            throw new Error(mensagem);
        }
    }

    public get nome(): string{
        return this._nome;
    }

    public get quantidadeArmazenada(): number {
        return this._quantidadeArmazenada;
    }

    public get estoqueMIN(): number {
        return this._estoqueMIN;
    }

    public registrarEntrada(quantidade: number): void{
        this.validarMedida(quantidade, "A quantidade deve ser maior que zero")

        this._quantidadeArmazenada += quantidade;
    }

    public registrarSaida(quantidade: number): void{
        this.validarMedida(quantidade, "A quantidade deve ser maior que zero");

        if (quantidade > this._quantidadeArmazenada){
            throw new Error("Quantidade insufiente no estoque");
        }
        this._quantidadeArmazenada -= quantidade;
    }

    public precisaReposicao(): boolean {
        return this._quantidadeArmazenada < this._estoqueMIN;
    }

    public exibirSituacaoEstoque(): string {
        if (this.precisaReposicao()){
            return "Reposição Necessária"
        }

        return "Estoque Regular"
    }
}