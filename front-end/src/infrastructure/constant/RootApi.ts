export const ROOT_API = 'http://localhost:3030/';
export const PURCHASE_PREFIX = "purchase/";

export class PurchasesApi {
  static readonly Insert = `${ROOT_API}${PURCHASE_PREFIX}insert`;
}
