export interface Price {
  id: number;
  name: string;
  description: string;
  price: number | string;
  monthlyHour: number | string;
  team: string;
  freelancersPrice?: number;
  mostPopular: boolean;
  titleColor: string;
  payment: string;
}
