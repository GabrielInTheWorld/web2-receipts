import * as React from "react";

export interface SLProps { name: string; }

export const ShoppingList = (props: SLProps) => (      
    <div className="shopping-list">
        <h1>Shopping List for {props.name}</h1>
        <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
        </ul>
    </div>
);
