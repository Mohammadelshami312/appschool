// Teacher Menu Component
import React, { Component } from 'react';
import ItemMenu from './ItemMenu';
import './style.css';
import { connect } from 'react-redux';
import { ENGLISH, FRENCH, PORTO } from '../../../languages';

class TeacherMenu extends Component {
    state = {
        titleName: {
            [ENGLISH]: 'My Classes',
            [FRENCH]: 'Mes Classes',
            [PORTO]: 'Minhas Aulas'
        },
        teacherId: 2,
        myClassRooms: [
            {
                id: 2,
                name: 'Grade A',
                matiers: [
                    {
                        name: 'French',
                        idStudent: 3,
                        mark: 90
                    },
                    {
                        name: 'Chimie',
                        idStudent: 4,
                        mark: 87
                    },
                    {
                        name: 'Sport',
                        idStudent: 5,
                        mark: 50
                    }
                ]
            },
            {
                id: 3,
                name: 'Grade B',
                matiers: [
                    {
                        name: 'Biologie',
                        idStudent: 3,
                        mark: 77
                    },
                    {
                        name: 'Phylosophie',
                        idStudent: 4,
                        mark: 88
                    },
                    {
                        name: 'Arabic',
                        idStudent: 5,
                        mark: 60
                    }
                ]
            },
            {
                id: 4,
                name: 'Grade C',
                matiers: [
                    {
                        name: 'English',
                        idStudent: 3,
                        mark: 70
                    },
                    {
                        name: 'Physique',
                        idStudent: 4,
                        mark: 80
                    },
                    {
                        name: 'Math',
                        idStudent: 5,
                        mark: 40
                    }
                ]
            }
        ]
    }
    componentDidMount = () => {
        console.log(this.props);
    }
    render() {
        const language = this.props.language;
        const title = this.state.titleName[language];
        return (
            <div className='teacher-menu'>
                <div className='title'>{title}</div>
                <ul >
                    {
                        this.state.myClassRooms.map((item, index) => {
                            return (
                                <ItemMenu className={item.name} matiers={item.matiers} key={index} />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        language: state.language
    }
}
export default connect(mapStateToProps)(TeacherMenu);