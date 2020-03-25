import React, { Component } from "react";
import "./Contact.css"

export class Contact extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="b3">
        {/* <form
          onSubmit={this.handleSubmit}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="SubmitButton" onSubmit={this.handleSubmit}>
          </button>
             Submit

        </form> */}
            <a className="SubmitButton" href="mailto:jbuhay3@gmail.com">Contact Me</a>
      </div>
    );
  }
}

export default Contact;
