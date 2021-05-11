/* Readable Scalable Secure */
import React, { Component } from 'react';
import './style.css';

class ItemMenu extends Component {
    state = {
        showMatiersItems: false,
        chevronToggle: 'fa-chevron-right'
    }
    // Show Or Hide Matiers List
    toggleShow = () => {
        console.log('Clicked');
        const { chevronToggle } = this.state;
        if (chevronToggle === 'fa-chevron-right') {
            this.setState({
                showMatiersItems: true,
                chevronToggle: 'fa-chevron-down',

            });
        } else {
            this.setState({
                showMatiersItems: false,
                chevronToggle: 'fa-chevron-right'
            });
        }
    }
    render() {
        return (
            <li className='item-menu'>
                <div className='classroom' onClick={this.toggleShow}>
                    <span className='classroom-name'>
                        {this.props.className}
                        <span className='index'><i className={`fa ${this.state.chevronToggle}`} aria-hidden="true"></i></span>
                    </span>
                </div>
                {
                    this.state.showMatiersItems ?
                        <>
                            <ul>
                                {
                                    this.props.matiers.map((item, index) => {
                                        return (
                                            <li key={index} className='matiere'>
                                                <a href="#">{item.name}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </> :
                        ''
                }

            </li>
        );
    }
}

export default ItemMenu;