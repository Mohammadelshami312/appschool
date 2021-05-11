import React, { Component } from 'react';
import './style.css';

class LangComponent extends Component {
    render() {
        return (
            <ul className='navigation'>
                <li className='menu'>
                    <a href='#'>Lang</a>
                    <ul className='submenu'>
                        <li><a href='#'>Link 1</a></li>
                        <li><a href='#'>Link 1</a></li>
                        <li><a href='#'>Link 1</a></li>
                    </ul>
                </li>
            </ul>

        );
    }
}
export default LangComponent;