import * as React from "react";

// Interface exports for typescript lookups etc.

export interface InstructionProps { 
    step: string,
    text: string,
    task: string,
    usedIngredients: number[]
}
export interface Props { 
    model: InstructionProps
}

// JSX definition exports for building the dom 

export const InstructionItem = (props: Props) => (
    <li id="{props.model.step}">{props.model.step} {props.model.task}
        <ul>
             <li>{props.model.text}</li>
        </ul>
    </li>
    
);

// export const InstructionItemSingle = (props: InstructionProps) => (
//     <li id="{props.step}">{props.step} {props.text} {props.task} {props.usedIngredients}</li>
// );
