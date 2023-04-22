export interface Description {
  id: number;
  name: string;
  text: string[];
};

export interface Service {
  id: number;
  name: string;
  icon: string;
  descriptions: Description[];
}
