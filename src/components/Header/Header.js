import React from 'react';
import AppBar from '../AppBar/AppBar';
import './Header.css';


const Header = (props) =>{
    return(
        <header>
            {/* <div className="container">
                <p className="nameAge">Đây Là {props.name} App {props.age} Year</p>
                <p>Là children :  {props.children}</p>
                <nav>
                    <ul className="nav">
                        <li>Home</li>
                        <li>Pages</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div> */}
            <AppBar> </AppBar>
        </header>
    );
}

export default Header;
