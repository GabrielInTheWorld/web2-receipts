import * as React from "react";

import * as IngredientNS from "./Ingredient";
import * as IngredienListNS from "./IngredientList";
import { IngredientList } from "./IngredientList";
import { IngredientTable } from "./IngredientTable";
import { InstructionList } from "./InstructionList";

import * as InstructionNS from "./Instruction";

// export interface PreviewBlockProps { 
//     imgsrc: string,
//     ref: string,
//     text: string
// }

export interface JSONExcerpt {
    images: string,
    title: string
}

export interface Props { 
    model: JSONExcerpt;
}

var prefix: string = "/src/res/";

import * as request from "superagent";

/**
 * PreviewBlock consisting of a background image, an text overlay and a wrapping a-href.
 */
export class PreviewBlock extends React.Component<Props, undefined> {
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        let mdl: JSONExcerpt = this.props.model;
        return (
            <div className="previewBlock">
                <a href="#">
                    <img src={prefix+mdl.images[0]}/>
                    <div className="overlayTextBox">
                        <p className="overlayText">{mdl.title}</p>
                    </div>
                </a>
            </div>
        );
    }
}