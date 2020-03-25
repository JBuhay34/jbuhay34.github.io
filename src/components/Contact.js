import React, { Component } from "react";
import "./Contact.css"

export class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault()

        const {
          REACT_APP_EMAILJS_RECEIVER: receiverEmail,
          REACT_APP_EMAILJS_TEMPLATEID: template,
          REACT_APP_EMAILJS_USERID: user
        } = this.props.env

        this.sendFeedback(
          template,
          this.props.senderEmail,
          receiverEmail,
          this.state.feedback,
          user
        )

        this.setState({
          formSubmitted: true
        })
      }

      sendFeedback (templateId, senderEmail, receiverEmail, feedback, user) {
        window.emailjs.send(
          'default_service', // default email provider in your EmailJS account
          templateId,
          {
            senderEmail,
            receiverEmail,
            feedback
          },
          user
        )
          .then(res => {
            this.setState({ formEmailSent: true })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Failed to send feedback. Error: ', err))
      };

  render() {
    return (
      <div className="b3">
        <form
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
          {/* <button type="submit" className="SubmitButton" onSubmit={this.handleSubmit}>
          </button> */}
          <a href="mailto:jbuhay3@gmail.com">Submit</a>
            {/* Submit */}

        </form>
      </div>
    );
  }
}

export default Contact;
