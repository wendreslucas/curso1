export class Negociacao {
  constructor(
    public _data: Date, 
    private _quantidade: number, 
    private _valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data
  }

  get volume(): number {
    return this._quantidade * this._valor
  }
}
