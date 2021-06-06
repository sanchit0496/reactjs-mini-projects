import React, {useState} from 'react'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category ))];
console.log(allCategories);


const App = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    
    const filterItems = (category) => {
         if(category === 'all'){
             setMenuItems(items)
             return
         }
         const newItems = items.filter((items) => items.category === category);
         setMenuItems(newItems);
    }

    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>The Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items = {menuItems} />
            </section>
        </main>
    );
}

export default App
