import React from 'react';

class Menu extends React.Component{

    render(){
        return(
            <button className="menu-block" onClick={this.props.data.fun}>
                <span className={this.props.data.icon} aria-hidden="true"></span>
                <a>{this.props.data.text}</a>
            </button>


        );

    }

}

export default Menu;