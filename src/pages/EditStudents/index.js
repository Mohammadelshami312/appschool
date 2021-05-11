import React, { Component } from "react";
import StudentDetails from "../../components/StudentDetails";
import SearchField from "../../components/SearchField";
import UpdateStudentForm from '../../components/UpdateStudentForm';

class EditStudents extends Component {
  render() {
    return (
      <div className="edit-students">
        <div className="container-fluid">
          <div className="col-12 text-center">
            <div className="edit-students-title">
              <h2> Edit Students </h2>
            </div>
          </div>
          <SearchField />
          <StudentDetails /> 
          <UpdateStudentForm />
        </div>
      </div>
    );
  }
}

export default EditStudents;
