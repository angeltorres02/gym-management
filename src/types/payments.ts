export interface Pagos {
  id: number;
  client: {
    name: string;
  };
  date: Date;
  amount: number;
  paymentStatus: string;
}
