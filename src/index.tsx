import * as React from "react";
import * as ReactDOM from "react-dom";

import { PreviewBlock } from "./components/PreviewBlock";
import * as INS from "./components/Ingredient";

//import json from './components/receipt01.json';

//http://localhost:8000/src/res/receipt01.json

import * as request from "superagent"

// Get receipt as json and build dom based on it
request
  .get('http://localhost:8000/src/res/receipt01.json')
  .end(function(err, res){
    // let ingredientJSON: INS.IngredientModel[];
    // ingredientJSON = res.body.ingredients;

    ReactDOM.render(
        <PreviewBlock model={res.body} />,
        // <ShoppingList name="FancyList" />,
        //  <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("example")
    );
  });
