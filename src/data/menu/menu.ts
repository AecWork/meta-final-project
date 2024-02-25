export interface Dish {
    title: string
    description: string
    price: number
}

export interface MenuSection {
    title: string
    dishes: Dish[]
}

type Menu = MenuSection[]

export const mockDish: Dish = {
    title: 'Cup of Chicken Broth & Amontillado',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    price: 9
}

const MENU_DATA: Menu = [
    {
        title: 'Starters',
        dishes: [...Array(5).keys()].map(() => mockDish)
    },
    {
        title: 'Salads & vegetables',
        dishes: [...Array(4).keys()].map(() => mockDish)
    },
    {
        title: 'Pasta',
        dishes: [...Array(4).keys()].map(() => mockDish)
    },
    {
        title: 'Meats',
        dishes: [...Array(4).keys()].map(() => mockDish)
    },
    {
        title: 'Seafood',
        dishes: [...Array(4).keys()].map(() => mockDish)
    },
    {
        title: 'Deserts',
        dishes: [...Array(2).keys()].map(() => mockDish)
    },
    {
        title: 'Wines',
        dishes: [...Array(6).keys()].map(() => mockDish)
    },
    {
        title: 'Beers',
        dishes: [...Array(6).keys()].map(() => mockDish)
    }
]

export default MENU_DATA;