export class Order {
  id: number;
  currencyPair: string;
  orderType: string;
  direction: string;
  condition: string;
  conditionValue1: number;
  conditionValue2: number;
  price: number;
  SL: number;
  TP: number;
  lot: number;
  creator: number;
  state: string; // approved, canceled, pending
  capital: number;
  percentage: number;
}
