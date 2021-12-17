import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import axios from "axios";
import Home from './Home'
import Pizza from "./Pizza";
import Order from "./Order";
import * as yup from 'yup'


const initialFormValues = {
  name: '',
  size: '',
  roni: false,
  sausage: false,
  mushrooms: false,
  pineapple: false,
  special: '',
}

const initialOrders = [];

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        // console.log(res)
        // console.log(res.data.roni)
        setOrders([ res.data, ...orders])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      roni: formValues.roni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      pineapple: formValues.pineapple,
      special: formValues.special.trim(),

    }
    postNewOrder(newOrder);
  }

  return (
    <>
      <h1><a href='/'>Austin's Pizzzza</a></h1>
      <Switch>
        <Route path='/pizza'>
          <Pizza 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <button><a href='/orders'>Past orders</a></button>
      {
        orders.map(order => {
          return(
            <Order details={order} />
          )
            })
      }
    </>
  );
};
export default App;
