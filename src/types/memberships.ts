export interface Membresias {
  id: number;
  clientId: number;
  client: {
    name: string;
  };
  initialDate: Date;
  expirationDate: Date;
}
