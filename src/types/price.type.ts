export interface Preference {
  id: number;
  name: string;
  description: string;
}

export interface Price {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number | string;
  monthlyHour: number | string;
  team: string[];
  mostPopular: boolean;
  titleColor: string;
  payment: string;
  preferences: Preference[];
  frealancersPrice: number;
}
