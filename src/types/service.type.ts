export interface Description {
  id: number;
  name: string;
  text: string[];
};

export interface Service {
  id: number;
  link: string;
  nameWithWrap: string,
  name: string;
  icon: string;
  descriptions: Description[];
}
