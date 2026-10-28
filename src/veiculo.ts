export class Veiculo{
    private _modelo: string;
    private _velocidadeAtual: number;
    private _estado: boolean;

    constructor(modelo: string){
        if (!modelo || modelo.trim() === ""){
            throw new Error ("O modelo é obrigatório");
        }

        this._modelo = modelo;
        this._velocidadeAtual = 0;
        this._estado = false;
    }

    public get modelo(): string {
        return this._modelo;
    }

    public get velocidadeAtual(): number{
        return this._velocidadeAtual;
    }

    public get estado(): boolean{
        return this._estado;
    }

    public ligarVeiculo(): void{
        this._estado = true;
    }

    public desligarVeiculo(): void{
        if (this._velocidadeAtual > 0){
            throw new Error("O veiculo só pode ser desligado quando estiver parado")
        }
        this._estado = false;
    }

    public Acelerar(): void {
        if (!this._estado){
            throw new Error ("O veiculo precisa estar ligado para acelerar");
        }

        this._velocidadeAtual += 10;
    }

    public frear(): void {
        if (this._velocidadeAtual <= 0) {
            throw new Error ("A velocidade já está em zero");
        }

        if (this._velocidadeAtual - 10 < 0){
            this._velocidadeAtual = 0
        } else {
            this._velocidadeAtual -= 10;
        }
    }

    public consultarVelocidade(): number {
        return this._velocidadeAtual;
    }

    public exibirEstado(): string{
        if (this._estado){
            return "O carro está ligado";
        } 

        return "O carro está desligado";
    }


}