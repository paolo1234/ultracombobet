import React, {Component} from 'react';
import MenuItem from './MenuItem';

class Navbar extends Component{
    items = [
        {
            title: "Home",
            link: "login.html",
        },
        {
            title: "Pronostrici",
            link: "gino.html",
        },
    ];
    render(){

        return(
            <div className="Navbar"> 
                <ul>
                    {this.items.map((item, index) => {
                        return (<MenuItem key={index} title={item.title} link={item.link}></MenuItem>)
                    })}
                </ul>
            </div>
        )

    }

}

export default Navbar;