
/*
  public record PurchaseHeader (
    string CardCode,
    string CardName,
    string CreateDate,
    double OrderNum,
    string ShipTo
  );
 */


export class PurchaseHeader {
  constructor(
    public vendor_code: string,
    public vendor_name: string,
    public purchase_date: Date,
    public remarks: number,
    public ship_to: string
  ) {}
}
