import React from 'react'
import Tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale.css';

function App() {

    new Tippy('#t1',{
        position:'bottom',
        animation:'scale',
        arrow:'true'
    });
    new Tippy('#t2',{
        position:'top',
        animation:'perspective',
        interactive:'true'
    });
    new Tippy('#t3',{
        position:'bottom',
        animation:'scale',
        arrow:'true',
        theme:'light'
    });
    new Tippy('#t4',{
        position:'bottom',
        animation:'scale',
        arrow:'true',
        trigger:'click'
    });

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nemo excepturi laudantium necessitatibus voluptate exercitationem, sed cupiditate reiciendis mollitia tempora, voluptas nostrum ipsum porro nobis fugiat vero repellat doloribus ipsam!</p>
<       div class="tooltip">
    	    <button id="t1" class="btn tippy" title="a cute tooltip!">hover here</button>
    	    <button id="t2" class="btn tippy" title="a cute tooltip!">hover here</button>
    	    <button id="t3" class="btn tippy" title="a cute tooltip!">hover here</button>
    	    <button id="t4" class="btn tippy" title="a cute tooltip!">click here</button>
        </div>

        </div>
    )
}

export default App
