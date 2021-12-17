import React from "react";

export default function Pizza(){
    
    return(
        <div>
            <h1>Order your pizza SON</h1>
            
            <form id='pizza-form'>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        id='name-input'
                    />
                </label>
                <label>Pizza Size
                    <select name='size' id='size-dropdown'>
                        <option value=''>-- Select a size --</option>
                        <option value='large'>Large</option>
                        <option value='medium'>Medium</option>
                        <option value='small'>Small</option>
                    </select>
                </label>
                <div className='toppings'>
                    <h3>Toppings</h3>
                    <label>Pepperoni
                        <input
                            name='roni'
                            type='checkbox'
                        />
                    </label>
                    <label>Sausage
                        <input
                            name='sausage'
                            type='checkbox'
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            name='mushrooms'
                            type='checkbox'
                        />
                    </label>
                    <label>Pineapple
                        <input
                            name='pineapple'
                            type='checkbox'
                        />
                    </label>
                </div>
                <label>Special Instructions
                    <input
                        name='special'
                        type='text'
                        id='special-text'
                    />
                </label>
            </form>
        </div>
    )
}