import { MenuItemType } from "./MenuItemType";

export interface MenuCategoryType {
    id: number;
    name: string;
    items: MenuItemType[];
  }