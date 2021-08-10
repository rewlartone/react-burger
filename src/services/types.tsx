import { Location } from "history";
export type TIngredient = {
    _id: string;
    name: string;
    type: "bun" | "sauce" |"main";
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    key: string;
}

export type TOrder = {
    _id: string;
    name: string;
    number: number;
    ingredients: string[];
    updatedAt: string;
	createdAt: string;
    status: string;
}

export interface ILocation extends Location {
    background?: any;
    from?: any;
}
