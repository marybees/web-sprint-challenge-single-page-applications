import React, { useState, useEffect } from 'react'
import Pizza from './Pizza'
import PizzaForm from './PizzaForm'
import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    hiking: false,
    reading: false,
    coding: false,
  },
  instructions: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  toppings: '',
  instructions: '',
}
const initialPizzas = []
const initialDisabled = true


export default function App() {
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/pizzas', newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data])
      })
      .catch(err => {
        return err
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping]),
      instructions: formValues.instructions.trim(),
    }
    postNewPizza(newPizza)
  }

  // useEffect(() => {
  //   getPizzas()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Lambda Eats</h1></header>

      <PizzaForm
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        pizzas.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
    </div>
  )
}
