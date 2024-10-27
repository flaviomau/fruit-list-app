export interface NutritionDTO {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

export interface FruitDTO {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: NutritionDTO;
}
