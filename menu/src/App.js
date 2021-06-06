import React, {useState} from 'react'
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

const App = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);
    

    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>The Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories />
                <Menu items = {menuItems} />
            </section>
        </main>
    );
}

export default App
