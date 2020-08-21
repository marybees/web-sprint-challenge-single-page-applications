import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Order Your Pizza</h2>
        <button disabled={disabled}>submit</button>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.toppings}</div>
          <div>{errors.instructions}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>What Type of Pizza Would You Like?</h4>
        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <label>Size:&nbsp;
          <select
            onChange={onInputChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select a Pizza Size -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
     

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        <label>Pepperoni
          <input
            type="checkbox"
            name='pepperoni'
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            checked={values.toppings.mushrooms}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Onions
          <input
            type="checkbox"
            name="onions"
            checked={values.toppings.onions}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.toppings.sausage}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Extra Cheese
          <input
            type="checkbox"
            name="cheese"
            checked={values.toppings.cheese}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Green Peppers
          <input
            type="checkbox"
            name="peppers"
            checked={values.toppings.peppers}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Special Instructions:&nbsp;
          <input
            value={values.instructions}
            onChange={onInputChange}
            name='instructions'
            type='text'
          />
        </label>

        </div>
      </div>
    </form>
  )
}
