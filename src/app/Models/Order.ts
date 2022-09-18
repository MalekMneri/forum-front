import { User } from './User';
export class Order {
  id?: number;
  currencyPair?: string;
  orderType?: string;
  direction?: string;
  condition?: string;
  conditionValue1?: number;
  conditionValue2?: number;
  price?: number;
  sl?: number;
  tp?: number;
  lot?: number;
  date?: string;
  creator?: number | User;
  validator?: number;
  state?: string; // approved, canceled, pending
  capital?: number;
  percentage?: number;
}
