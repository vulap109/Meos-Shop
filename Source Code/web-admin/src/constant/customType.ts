export interface listCategoriesType {
  id: number;
  categoryName: string;
  parent: string;
  properties: propertiesType;
}
export interface propertiesType {
  nameProp: string;
  option: string[];
}
