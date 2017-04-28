import * as React from "react";

import * as instructionNS from "./Instruction";
import { InstructionItem } from "./Instruction";

export interface InstructionListProps { 
    instructions: instructionNS.InstructionProps[];
}

export interface InstructionListStates { date: Date; }

import * as request from "superagent";

// 'InstructionListProps' describes the shape of props.
// 'InstructionListStates' describes the state 
export class InstructionList extends React.Component<InstructionListProps, InstructionListStates> {
    
    constructor(props: InstructionListProps) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        let rows: JSX.Element[];
        rows = [];

        this.props.instructions.forEach( instruction => {
            rows.push(<InstructionItem model={instruction} />);
        });

        return (
            <div className="c box">
                <ul>
                    {rows}
                </ul>
            </div>
        );
    }
}