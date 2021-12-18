import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import axios from "axios";
import Home from './Home'
import Pizza from "./Pizza";
import Order from "./Order";
import formSchema from "./formSchema";
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

const initialFormErrors = {
  name: '',
  size: '',
  roni: false,
  sausage: false,
  mushrooms: false,
  pineapple: false,
  special: '',
}


const initialOrders = [];
const initialDisabled = true;

const App = () => {

  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        // console.log(res)
        // console.log(res.data.roni)
        setOrders([ res.data, ...orders])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
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

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])



  return (
    <>
      <h1><a href='/'>Austin's Pizzzza</a></h1>
      <Switch>
        <Route path='/pizza'>
          <Pizza 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
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
