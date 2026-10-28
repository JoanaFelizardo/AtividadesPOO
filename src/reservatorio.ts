export class ReservatorioAgua {
    private _capacidadeMAX: number;
    private _volumeAtual: number;

    constructor (capacidadeMAX: number){

       this.validarMedida(capacidadeMAX, "A capacidade máxima deve ser maior que zero.");
        
        this._capacidadeMAX = capacidadeMAX;
        this._volumeAtual = 0; // reservartório nasce vazio
    }

    public validarMedida(valor: number, mensagem: string) {
        if (valor <= 0){
            throw new Error(mensagem);
        }
    }

    public get capacidadeMAX(): number {
        return this._capacidadeMAX;
    }

    public get volumeAtual(): number {
        return this._volumeAtual;
    }
    
    public adicionarAgua(quantidade: number): void {
        this.validarMedida(quantidade, "A quantidade deve ser maior que zero");

        if (this._volumeAtual + quantidade > this._capacidadeMAX){
            throw new Error ("Não pode ultrapassar a capacidade maxima.");
        }

        this._volumeAtual += quantidade;
    }

    public retirarAgua(quantidade: number): void {
        this.validarMedida(quantidade, "A quantidade a retirar deve ser maior que zero");

        if (quantidade > this._volumeAtual){
            throw new Error("Quantidade a retirar é maior que o volume atual");
        }

        this._volumeAtual -= quantidade;

    }

    public calcularPercentualOcupado(): number {
        return (this._volumeAtual / this._capacidadeMAX) * 100;
    }

    public estarVazio(): boolean {
        return this._volumeAtual === 0;
    }

    public estaCheio(): boolean {
        return this._volumeAtual === this._capacidadeMAX;
    }



}