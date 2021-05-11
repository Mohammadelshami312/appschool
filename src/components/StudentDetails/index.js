import React, { Component } from 'react';
import '../../components/StudentDetails';
import './style.css';

const StudentField = (props) => {
    return (
        <div className='student-field'>
          { `${props.attr}: ${props.value}` }
        </div>
    );
}
class StudentDetails extends Component {
  render() {
      return (
        <div className='col-lg-6 col-12 student-details'>
          <div className='row'>
            <div className='col-6 section'>
                <StudentField attr='Name' value='Mohammad' />
                <StudentField attr='Prename' value='Elshami' />
                <StudentField attr='Brithday' value='24/4/1996' />
                <StudentField attr='Class' value='Grade 8' />
                <StudentField attr='Sex' value='Male' />
           </div>
           <div className='col-6 section'>                
                <StudentField attr='Uniform Books' value='100$' />
                <StudentField attr='Guardian' value='Salman' />
                <StudentField attr='Phone number' value='76712035' />
                <StudentField attr='Place of birht' value='Beyrut' />
           </div>
          </div>
        </div>
      );
  }
}
export default StudentDetails;