interface IIngredientsArray {
    [key: string]: number
}

export interface IIngredients extends IIngredientsArray {
    salad: number,
    bacon: number,
    cheese: number,
    meat: number
}