import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h1>Contact Info:</h1>
        <ul>
          <li>
            <b>Email:</b> <a href="mailto:lara.croft@gmail.com"></a>
            lara.croft@gmail.com
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/farzin-jabbary/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Contact;
