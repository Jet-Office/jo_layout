export interface Description {
  id: number;
  link: string;
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
