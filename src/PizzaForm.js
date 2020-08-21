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

      <div className='form-group inputs'>
        <h4>Build Your Own Pizza</h4>
        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <br></br>
        <br></br>

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
        <h4>Select Toppings</h4>

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

        <br></br>
        <br></br>

        <label>Special Instructions:&nbsp;
          <input
            value={values.instructions}
            onChange={onInputChange}
            name='instructions'
            type='text'
          />
        </label>

        </div>

        <div className='form-group submit'>
            <h4>Submit Your Order</h4>
            <button className='submit-button' disabled={disabled}>Submit</button>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
        </div>

      </div>
    </form>
  )
}
