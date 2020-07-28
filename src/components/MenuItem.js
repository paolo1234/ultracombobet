import React, {Component} from 'react';

class MenuItem extends Component{

    render(){

        return(
            <li className="MenuItem"><a href={this.props.link}> {this.props.title} </a></li>
        )

    }

}

export default MenuItem;