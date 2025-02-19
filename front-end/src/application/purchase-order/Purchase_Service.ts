import { Requester } from '../../infrastructure/common/Requester'
import {PurchasesApi} from "../../infrastructure/constant/RootApi";

export class PurchaseService {
  async insert(purchaseData: any): Promise<any> {
    const response = await Requester.post(PurchasesApi.Insert, purchaseData);
  }
}
