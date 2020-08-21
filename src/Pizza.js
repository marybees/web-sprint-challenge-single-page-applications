import React from 'react'

function Pizza({ details }) {
  if (!details) {
    return <h3>Stand by while we place your order...</h3>
  }

  return (
    <div className='pizza container'>
      <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
        <p>Special Instructions: {details.instructions}</p>
    </div>
  )
}

export default Pizza
