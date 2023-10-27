import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "../Components/content_option"
import "./contact.css";
export default function ContactUs() {
  const contactConfig = {
    YOUR_EMAIL: 'ambengineers1@gmail.com',
    YOUR_FONE: 'Sher Singh- +91-9205341755',
    address: "Ground Floor B-82, Aali Extension, Badarpur, New Delhi, India, 110044",
    YOUR_SERVICE_ID: 'service_id',
    YOUR_TEMPLATE_ID: 'template_id',
    YOUR_USER_ID: 'user_id',
  };

  return (
    <Container className="Contact">

      <Row className="mb-5 mt-3">
        <Col lg="8">
          {/* <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" /> */}
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h2 className="color_sec py-4">Get in touch</h2>
          <br /> <br />
          <address>
            <h5>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
            </h5>

            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <h5>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </h5>
            ) : (
              ""
            )}
            <br />
            {contactConfig.hasOwnProperty("address") ? (
              <h5>
                <strong>Address:</strong> {contactConfig.address}
              </h5>
            ) : (
              ""
            )}
          </address>
          {/* <p>{contactConfig.address}</p> */}
        </Col>
        <Col lg="7" className="d-flex align-items-center">

          <form className="contact__form w-100">
            <h2 className="color_sec py-4">Send your query directly!!</h2>
            <Row>

              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}


// import React from "react";

// function onClickButton(event) {
//   event.preventDefault();
// }

// function Contact() {
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center">Contact Us</h1>
//       </div>

//       <div className="container contact-div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             <form>
//               <div className="form-group">
//                 <label for="exampleFormControlInput1">Enter Full Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="Enter Your Name"
//                 />
//               </div>
//               <div className="form-group pt-3">
//                 <label for="exampleFormControlInput1">Contact Number</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="+91-"
//                 />
//               </div>
//               <div className="form-group pt-3">
//                 <label for="exampleFormControlInput1">Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="name@example.com"
//                 />
//               </div>

//               <div className="form-group pt-3">
//                 <label for="exampleFormControlTextarea1">
//                   Type your Message Here
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   rows="3"
//                   placeholder="Message"
//                 ></textarea>
//               </div>

//               <div className="col-12 pt-3">
//                 <button
//                   onClick={onClickButton}
//                   className="btn btn-outline-primary"
//                   type="submit"
//                 >
//                   Submit form
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;
