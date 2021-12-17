import React from "react";

export default function Pizza(props){
    const { values, change, submit } = props;

    const handleChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <div>
            <h1>Order your pizza SON</h1>
            
            <form id='pizza-form' onSubmit={handleSubmit}>
                <label>Name
                    <input
                        value={values.name}
                        onChange={handleChange}
                        name='name'
                        type='text'
                        id='name-input'
                    />
                </label>
                <label>Pizza Size
                    <select name='size' id='size-dropdown' value={values.size} onChange={handleChange}>
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
                            checked={values.roni}
                            onChange={handleChange}
                            name='roni'
                            type='checkbox'
                        />
                    </label>
                    <label>Sausage
                        <input
                            checked={values.sausage}
                            onChange={handleChange}
                            name='sausage'
                            type='checkbox'
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            checked={values.mushrooms}
                            onChange={handleChange}
                            name='mushrooms'
                            type='checkbox'
                        />
                    </label>
                    <label>Pineapple
                        <input
                            checked={values.pineapple}
                            onChange={handleChange}
                            name='pineapple'
                            type='checkbox'
                        />
                    </label>
                </div>
                <label>Special Instructions
                    <input
                        value={values.special}
                        onChange={handleChange}
                        name='special'
                        type='text'
                        id='special-text'
                    />
                </label>
                <button id='order-button'>Add to Order</button>
            </form>
        </div>
    )
}