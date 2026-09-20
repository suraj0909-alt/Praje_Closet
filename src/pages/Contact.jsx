import { useState } from "react";
import { FiMail, FiPhone, FiClock, FiInstagram } from "react-icons/fi";
import Button from "../components/Button.jsx";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="page contact-page">
      <div className="container">
        <div className="contact-head">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-sub">
            Questions about an order, a fit, or a collaboration — we'd love
            to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <h3>Message sent.</h3>
                <p>Thanks for reaching out — our team replies within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    Name
                    <input name="name" required value={form.name} onChange={handleChange} />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" required value={form.email} onChange={handleChange} />
                  </label>
                </div>
                <label>
                  Phone
                  <input name="phone" value={form.phone} onChange={handleChange} />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
                <Button type="submit" className="btn-block">
                  Send Message
                </Button>
              </>
            )}
          </form>

          <aside className="contact-info">
            <div className="info-item">
              <FiMail size={18} />
              <div>
                <h4>Email</h4>
                <p>hello@praje_closet.style</p>
              </div>
            </div>
            <div className="info-item">
              <FiPhone size={18} />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-item">
              <FiClock size={18} />
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Sat, 10am – 7pm IST</p>
              </div>
            </div>
            <div className="info-item">
              <FiInstagram size={18} />
              <div>
                <h4>Follow Us</h4>
                <p>@praje_closet.style</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
