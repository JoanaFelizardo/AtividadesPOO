export class Aluno {
    private _nome: string;
    private _primeiraNota: number;
    private _segundaNota: number;
    private _quantidadeFaltas: number;

    constructor(nome: string, primeiraNota: number, segundaNota: number){
        if (!nome || nome.trim() === ""){
            throw new Error ("O nome do aluno é obrigatório.")
        }

        this.validarNota(primeiraNota, "A primeira nota deve estar entre 0 e 10");
        this.validarNota(segundaNota, "A segunda nota deve estar entre 0 e 10");

        this._nome = nome;
        this._primeiraNota = primeiraNota;
        this._segundaNota = segundaNota;
        this._quantidadeFaltas = 0;
    }

    private validarNota(nota: number, mensagem: string){
        if (nota < 0 || nota > 10){
            throw new Error(mensagem);
        }
    }

    public get nome(): string {
        return this._nome;
    }

    public get primeiraNota(): number {
        return this._primeiraNota;
    }

    public get segundaNota(): number{
        return this._segundaNota;
    }

    public get quantidadeFaltas(): number{
        return this._quantidadeFaltas;
    }

    public calcularMedia(): number {
        return (this._primeiraNota + this._segundaNota) / 2;
    }

    public registrarFalta(): void{
        this._quantidadeFaltas += 1;
    }

    public verificarAprovado(): boolean{
        return this.calcularMedia() >= 6.0 && this._quantidadeFaltas <= 10;
        
    }

    public excibirSituacaoAcademica(): string {
        if (this.verificarAprovado()){
            return "Aprovado";
        }

        return "Reprovado"
    }

}