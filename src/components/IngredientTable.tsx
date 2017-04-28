import * as React from "react";

import * as IngredientNS from "./Ingredient";
import { IngredientTr } from "./Ingredient";

export interface IngredientListProps { 
    ingredients: IngredientNS.IngredientModel[];
}

export interface IngredientListStates { date: Date; }

import * as request from "superagent";

// 'IngredientListProps' describes the shape of props.
// 'IngredientListStates' describes the state 
export class IngredientTable extends React.Component<IngredientListProps, IngredientListStates> {
    
    constructor(props: IngredientListProps) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        let rows: JSX.Element[];
        rows = [];

        this.props.ingredients.forEach( product => {
            rows.push(<IngredientTr model={product} />);
        });

        return (
            <div className="b box">
                <table>
                    <tr>
                        <th>Zutat</th>
                        <th>Menge</th> 
                    </tr>
                    {rows}
                </table>
            </div>
        );
    }
}
