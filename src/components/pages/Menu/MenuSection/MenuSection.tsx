import React from 'react'
import './MenuSection.css'
import { MenuSection as MS } from '../../../../data/menu/menu.ts'
import Dish from './Dish/Dish.tsx'

const MenuSection: React.FC<MS> = ({ title = 'Starters', dishes = [] }) => {
  return (
    <div className='menu-entry'>
        <h6>{ title }</h6>
        <div className='dish-list'>
            { dishes.map((dish, index) => <Dish key={index} {...dish}/>) }
        </div>
    </div>
  )
}

export default MenuSection