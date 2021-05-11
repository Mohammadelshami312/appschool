import React, { Component } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
// import languages
import { ENGLISH, FRENCH, PORTO } from "../../languages";
// import language words
import { ENGLISHWORDS, FRENCHWORDS, PORTOWORDS } from "./LangKeys";
// import connect from react-redux
import { connect } from "react-redux";
import axios from "axios";

import "./style.css";

class AddGrade extends Component {
  state = {
    langKeywords: {
      [ENGLISH]: ENGLISHWORDS,
      [PORTO]: PORTOWORDS,
      [FRENCH]: FRENCHWORDS,
    }
  }

  onSubmit = (values) => {
    console.log("hello from submit");
    console.log(values);
    let formData = new FormData();
    formData.append("gradeName", values.gradeName);
    formData.append("defInscriptionTax", values.defInscriptionTax);
    formData.append("defMonthlyPay", values.defMonthlyPay);
    formData.append("defUniformCost", values.defUniformCost);
    formData.append("defBooksCost", values.defBooksCost);
    formData.append("books", JSON.stringify(values.books));
    console.log(values.books);
    axios({
      method: "post",
      //"http://test-appschool.ml/test-upload/response.php"
      //
      url: "http://localhost/test-upload/response.php",
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response.data);
      });
  }
  form = (props) => {
    // Page Lang
    const pageLanguage = this.props.language;

    // Language KEywords

    const {
      addGrade,
      books,
      gradeName,
      defInscriptionTax,
      defMonthlyPay,
      defUniformCost,
      defBookCost,
      bookName
    } = this.state.langKeywords[pageLanguage];

    return (
      <form onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="add-grade col-lg-6 col-12">
            {/* Grade Name */}

            <div className="form-group">
              <label htmlFor="gradeName">{gradeName}</label>
              <Field
                name="gradeName"
                type="text"
                className="form-control"
                id="gradeName"
                placeholder=""
              />
              <span className="error">
                <ErrorMessage name="gradeName" />
              </span>
            </div>
            {/* default Inscription Tax */}

            <div className="form-group">
              <label htmlFor="defInscriptionTax">{defInscriptionTax}</label>
              <Field
                name="defInscriptionTax"
                type="number"
                className="form-control"
                id="nameStudent"
                placeholder=""
              />
              <span className="error">
                <ErrorMessage name="defInscriptionTax" />
              </span>
            </div>

            {/* default Monthly payment */}

            <div className="form-group">
              <label htmlFor="defMonthlyPay">{defMonthlyPay}</label>
              <Field
                name="defMonthlyPay"
                type="number"
                className="form-control"
                id="defMonthlyPay"
                placeholder=""
              />
              <span className="error">
                <ErrorMessage name="defMonthlyPay" />
              </span>
            </div>
            {/* default Uniform Cost */}

            <div className="form-group">
              <label htmlFor="defUniformCost">{defUniformCost}</label>
              <Field
                name="defUniformCost"
                type="number"
                className="form-control"
                id="defUniformCost"
                placeholder=""
              />
              <span className="error">
                <ErrorMessage name="defUniformCost" />
              </span>
            </div>

            {/* default Book Cost */}

            <div className="form-group">
              <label htmlFor="defBooksCost">{defBookCost}</label>
              <Field
                name="defBooksCost"
                type="number"
                className="form-control"
                id="defBooksCost"
                placeholder=""
              />
              <span className="error">
                <ErrorMessage name="defBooksCost" />
              </span>
            </div>
            {/* Books */}
            <div className="form-group">
              <FieldArray
                name="books"
                render={(arrayHelper) => (
                  <div className="add-books">
                    <h3 className="title-of-middle">{books}</h3>
                    {props.values.books.map((item, index) => (
                      <div key={index}>
                        <label htmlFor={`books.${index}.name`}>{bookName}</label>
                        <Field
                          id={`books.${index}.name`}
                          name={`books.${index}.name`}
                          className="form-control"
                          placeholder=""
                        />
                        <span className="error">
                          <ErrorMessage
                            className="error"
                            name={`books.${index}.name`}
                          />
                        </span>
                        <br />
                        <button
                          type="button"
                          className="btn btn-primary minus"
                          onClick={() => arrayHelper.remove(index)}
                        >
                          <i className="fa fa-minus fa-xs"></i>
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        arrayHelper.push({ name: ""})
                      }
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                )}
              />
            </div>
            {/* Submit Input*/}

            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Enregsiter"
              />
            </div>
          </div>
        </div>
      </form>
    );
  };

  // Validator
  schema = () => {
    //Show required *

    const required = "* required";
    const schema = Yup.object().shape({
      gradeName: Yup.string().required(required),
      defInscriptionTax: Yup.number()
        .typeError("accept numbers only")
        .required(required),
      defMonthlyPay: Yup.number()
        .typeError("accept numbers only")
        .required(required),
      defUniformCost: Yup.number()
        .typeError("accept numbers only")
        .required(required),
      defBooksCost: Yup.number()
        .typeError("accept numbers only")
        .required(required),
      books: Yup.array().of(
        Yup.object().shape({
          name: Yup.string()
            .typeError("accept Characters only")
            .required(required)
        }
        ))
      });
    return schema;
  };
  render() {
    // Page Lang
    const pageLanguage = this.props.language;

    // Language KEywords

    const {
      addGrade,
    } = this.state.langKeywords[pageLanguage];
    return (
      <div className="add-grade">
        <div className="container-fluid">
          <div className="col-12 text-center">
            <h2 className="title-of-middle">{addGrade}</h2>
          </div>
          {/* Start Formik */}
          <Formik
            initialValues={{
              gradeName: "",
              defInscriptionTax: "",
              defMonthlyPay: "",
              defUniformCost: "",
              defBooksCost: "",
              books: [
                {
                  name: ""
                },
              ],
            }}
            onSubmit={this.onSubmit}
            render={this.form}
            validationSchema={this.schema()}
          />
          {/* End Formik */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};
export default connect(mapStateToProps)(AddGrade);
