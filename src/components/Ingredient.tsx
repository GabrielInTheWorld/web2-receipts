import * as React from "react";

export interface IngredientModel { 
    id: string
    name: string
    amount: string
    measurement: string
}
export interface Props { 
    model: IngredientModel
}

export const IngredientLi = (props: Props) => (
    <li id="{props.id}">{props.model.name} {props.model.amount}{props.model.measurement}</li>
);

export const IngredientTr = (props: Props) => (
    <tr id="{props.id}">
        <td>{props.model.name}</td>
        <td>{props.model.amount}{props.model.measurement}</td>
    </tr>
);

export const IngredientSingle = (props: IngredientModel) => (
    <li id="{props.id}">{props.name} {props.amount}{props.measurement}</li>
);
