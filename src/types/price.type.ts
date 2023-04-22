export interface Price {
  id: number;
  name: string;
  description: string;
  price: number | string;
  monthlyHour: number | string;
  team: string[];
  mostPopular: boolean;
  titleColor: string;
  payment: string;
  preferences: string[];
  frealancersPrice: number;
}
