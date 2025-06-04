export interface Pagos {
  id: string;
  client: {
    name: string;
  };
  date: Date;
  amount: number;
  paymentStatus: string;
}
