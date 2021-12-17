import React from "react";


export default function Order(props){
    const { details } = props;

    if (!details){
        return <h3>Fetching......</h3>
    }
    return(
        <div>
            <h1>{`${details.name}'s order`}</h1>
            <p>Size: {details.size}</p>
            <h4>Toppings</h4>
            <p>Pepperoni: {details.roni.toString()}</p>
            <p>Sausage: {details.sausage.toString()}</p>
            <p>Mushrooms: {details.mushrooms.toString()}</p>
            <p>Pineapple: {details.pineapple.toString()}</p>
            <p>Special instructions: {details.special}</p>
            
        </div>
    )
}