export class Termostato {
    private _temperaturaAtual: number;
    private _temperaturaMIN: number;
    private _temperaturaMAX: number;

    constructor(temperaturaAtual: number, temperaturaMIN: number, temperaturaMAX: number){
        this._temperaturaAtual = temperaturaAtual;
        this._temperaturaMIN = temperaturaMIN;
        this._temperaturaMAX = temperaturaMAX;
    }
}