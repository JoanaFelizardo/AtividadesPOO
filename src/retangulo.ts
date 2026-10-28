export class Retangulo {
    private _base: number;
    private _altura: number;

    constructor (base: number, altura: number){
        this.validarMedida(base, "Base deve ser maior que zero");
        this.validarMedida(altura,"Altura deve ser maior que zero");

        this._base = base;
        this._altura = altura;
    }

    // leitura
    public get base(): number {
        return this._base;
    }

    public get altura(): number {
        return this._altura;
    }

    public calcularArea(): number{
        return this._base * this._altura;
    } 

    public calcularPerimetro(): number{
        return 2 * (this._base + this._altura);
    }

    public eQuadrado(): boolean{
        return this._base === this._altura;
    }

    public validarMedida(valor: number, mensagem: string): void{
        if (valor <= 0) {
            throw new Error(mensagem);
        }
    }




}