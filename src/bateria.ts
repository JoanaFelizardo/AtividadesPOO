export class BateriaRecarregavel {
    private _capacidadeMAX: number;
    private _cargaAtual: number;

    constructor (capacidadeMAX: number) {
        this.validarMedida(capacidadeMAX, "A capacidade máxima deve ser maior que zero");

        this._capacidadeMAX = capacidadeMAX;
        this._cargaAtual = capacidadeMAX;
    }

    public validarMedida(valor: number, mensagem: string): void {
        if (valor <= 0){
            throw new Error(mensagem);
        }
    } 

    public get capacidadeMAX(): number {
        return this._capacidadeMAX;
    }

    public get cargaAtual(): number {
        return this._cargaAtual;
    }

    public consumirBateria(quantidade: number): void {
        this.validarMedida(quantidade, "A quantidade deve ser maior que zero");
        
        if (this._cargaAtual - quantidade < 0) {
            throw new Error ("A carga não pode ficar abaixo de zero");
        }

        this._cargaAtual -= quantidade;
    }

    public carregarBateria (quantidade: number): void{
        this.validarMedida(quantidade, "A quantidade deve ser maior que zero");

        if (this._cargaAtual + quantidade > this._capacidadeMAX){
            throw new Error ("A quantidade de carga não pode ultrapassar a capacidade máxima");
        }

        this._cargaAtual += quantidade;
    }

    public calcularPercentualCarga(): number {
        return (this._cargaAtual / this._capacidadeMAX) * 100;
    }

    public estaDescarregada(): boolean{
        return this._cargaAtual === 0;
    }

    public estaCompletamenteCarregada(): boolean {
        return this._cargaAtual === this._capacidadeMAX;
    }
 }