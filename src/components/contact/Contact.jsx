
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="thank you" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form 
          action="https://formspree.io/f/xjvdjdzl"
          method="POST">
          <input name='Email' type="text" placeholder="Email" />
          <textarea name ='Message' placeholder="Message"></textarea>
          <button type="submit">Send</button>
          
        </form>
      </div>
    </div>
  );
}