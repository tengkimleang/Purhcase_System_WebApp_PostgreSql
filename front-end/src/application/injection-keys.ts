
import type { InjectionKey } from 'vue'
import type { PurchaseService } from './purchase-order/Purchase_Service'

export const PurchaseServiceKey: InjectionKey<PurchaseService> = Symbol('PurchaseService')
