// Left Component
import React, { Component } from 'react';
//import Teacher Menu
import TeacherMenu from './TeacherMenu';
import './style.css';

class LeftComponent extends Component {
    render() {
        return (
            <div className='left-component col-12 col-md-3 col-lg-2'>
                <TeacherMenu />
            </div>
        );
    }
}
export default LeftComponent;