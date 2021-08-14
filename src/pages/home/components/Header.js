import React from 'react';
import { Button} from '@material-ui/core';


function Header() {
    return (
        <header className="header">
        <div className="toolbar">
             <div>
                <span>PROGRAMA DO VINI</span>
             </div>
            
            <div>
                <Button color='primary'>Novo Post</Button>
                <span>img1</span>
                <span>img2</span>
            </div>
        </div>
    </header>
    )
}

export default Header;