export interface Description {
  id: number;
  icon:string;
  name: string;
  attachment: string;
  text: string;
};

export interface Service {
  id: number;
  name: string;
  link?: string;
  icon: string;
  descriptions: Description[];
}
