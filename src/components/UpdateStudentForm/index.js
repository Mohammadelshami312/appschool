import React from "react";
import Input from "../../components/InputsComponents/Input";
import "./style.css";

const UpdateStudentForm = () => {
  return (
    <form className='update-student'>
      <div className="row">
        <div className="update-student-section col-lg-6 col-12">
          {/*   */}
          <Input
            type="text"
            label="Register Fees"
            placeholder="Register Fees"
            id="registerFees"
            classInp="form-control"
          />

          {/*   */}
          <Input
            type="text"
            label="Register Fees"
            placeholder="Register Fees"
            id="registerFees"
            classInp="form-control"
          />

          {/*   */}
          <Input
            type="text"
            label="Register Fees"
            placeholder="Register Fees"
            id="registerFees"
            classInp="form-control"
          />
          {/* Update Submit Button */}
          <button className='btn'>Update</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateStudentForm;
