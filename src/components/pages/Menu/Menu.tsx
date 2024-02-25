import React from 'react'
import './Menu.css'
import MENU_DATA from '../../../data/menu/menu.ts'
import MenuSection from './MenuSection/MenuSection.tsx'

const Menu: React.FC = () => {
  return (
    <article className='menu-section'>
      <h5 className='uppercase'>Menu</h5>
      <p className='italics'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
      <hr />
      <section className='menu-content'>
        { MENU_DATA.map(ms => <MenuSection key={ms.title} {...ms}/>) }
      </section>
    </article>
  )
}

export default Menu