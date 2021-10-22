import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for submitting a message, we'll reply soon</span>
          )}
        </form>
      </div>
    </div>
  );
}
