import React from 'react'
import { Dish as D, mockDish } from '../../../../../data/menu/menu.ts'
import './Dish.css'

const Dish: React.FC<D> = ({
    title = mockDish.title,
    description = mockDish.description,
    price = mockDish.price
}) => {
  return (
    <div className='dish'>
        <div className='desc'>
            <span>{ title }</span>
            <span className='price'>{ price }€</span>
        </div>
        <p className='italics'>{ description }</p>
    </div>
  )
}

export default Dish