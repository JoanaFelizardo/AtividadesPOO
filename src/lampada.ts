// o 'export' permite que eu use essa classe em outros arquivos
export class Lampada {
    // Declarei que existe
    private _potencia: number; 
    private _estado: boolean;

    // os atributos, como estao em private, precisam receber um valor inicial
    // e o construtor protege o objeto
    // recebe os dados iniciais passados no 'new Lampada(...)
    constructor (potencia: number){
        // impede criar uma lampada com potência inválida
        if (potencia <= 0){
            throw new Error ("Potência deve ser maior que zero");
        }

        // salva nos atributos do objeto via this
        this._potencia = potencia;
        // regra de negocio, toda lampada começa desligada
        this._estado = false;
    }

    // lê a potencia por fora (ex: lampada.potencia), sem alterar
    public get potencia(): number {
        return this._potencia;
    }

    // liga a lampada
    public ligarLampada(): boolean {
        return this._estado = true;
    }

    // desliga a lampada
    public desligarLampada(): boolean {
        return this._estado = false;
    }

    // retorna se a lampada ta ligada ou desligada
    public estarLampada(): boolean {
        return this._estado;
    }


}

