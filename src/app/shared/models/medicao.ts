export class Medicao {
  constructor(
    public id: number,
    public temperatura: number,
    public umidade: number,
    public data: Date,
    public unidade: string,
  ) {}
}
