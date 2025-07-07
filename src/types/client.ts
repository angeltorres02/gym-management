export interface Cliente {
  id: number;
  membershipType: string;
  name: string;
  signUpDate: Date;
  clientStatus: string;
}

export interface ClientesPorMes {
  month: string;
  count: number;
  monthYear: string;
}
