import React from "react";
import { useState } from "react";
import ContactData from "./ContactData";

const Contact = () => {
  // useState for form handling `value:actualValue`
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  // changing the state of default `value:actualValue` pairs
  const changeData = (e) => {
    // object destructuring
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    alert(
      `hello I am ${data.fullname}, my mobile number is ${data.phone}, my mail-id is ${data.email} and ${data.message}`
    );
    Object.keys(data).forEach(key => delete data[key]);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={submitData}>
              {ContactData.map((value, index) => {
                return (
                    <>
                    {value.labelname === "Message" ? (
                      <div className="mb-3">
                        <label
                          htmlFor={value.labelfor}
                          className="form-label"
                        >
                          {value.labelname}
                        </label>
                        <textarea
                          className="form-control"
                          id={value.labelname}
                          name={value.inputname}
                          value={`${data[value.inputname]}`}
                          onChange={changeData}
                          rows="3"
                        ></textarea>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <label htmlFor={value.labelfor} className="form-label">
                          {value.labelname}
                        </label>
                        <input
                          type={value.inputtype}
                          className="form-control"
                          name={value.inputname}
                          value={`${data[value.inputname]}`}
                          onChange={changeData}
                          id={value.labelfor}
                          placeholder={value.placeholder}
                        />
                      </div>
                    )}
                  </>
                );
              })}
              <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
