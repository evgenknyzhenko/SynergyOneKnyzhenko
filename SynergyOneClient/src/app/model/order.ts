export class Order {
  constructor(
    public id?: number,
    public description?: string,
    public date?: string,
    public status?: string,
    public price?: string,
    public currency?: string
  ) {}
}
