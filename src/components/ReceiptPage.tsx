import * as React from "react";

import * as IngredientNS from "./Ingredient";
import * as IngredienListNS from "./IngredientList";
import { IngredientList } from "./IngredientList";
import { IngredientTable } from "./IngredientTable";
import { InstructionList } from "./InstructionList";

import * as InstructionNS from "./Instruction";

export interface ReceiptPageProps { 
    title: string,
    ingredients: IngredientNS.IngredientModel[];
    servings: number,
    instructions: InstructionNS.InstructionProps[];
}

export interface Props { 
    model: ReceiptPageProps;
}


import * as request from "superagent";

// 'ReceiptPageProps' describes the shape of props.
// 'IngredientListStates' describes the state 
export class ReceiptPage extends React.Component<Props, undefined> {
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        let mdl: ReceiptPageProps = this.props.model;
        return (
            <div className="wrapper">
                <div className="a box">
                    <h1>Title: {mdl.title}</h1>
                    <h5>Servings: {mdl.servings}</h5>
                </div>
                <IngredientTable ingredients={mdl.ingredients} />
                <InstructionList instructions={mdl.instructions} />
            </div>
        );
    }
}