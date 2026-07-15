import { useState } from "react";
import styles from "./ContactSection.module.css";
import mapPlaceholder from "../../assets/springs-hope.jpg";

const KAKUMA_MAP_LINK =
  "https://www.openstreetmap.org/?mlat=3.7090661&mlon=34.8624838#map=12/3.7091/34.8625";
const KAKUMA_MAP_IMAGE = mapPlaceholder;

const SUBJECTS = [
  "General Inquiry",
  "Support Request",
  "Partnership",
  "Feedback",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.fname || !form.email || !form.message) {
      alert("Please fill required fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setForm({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>

        {/* LEFT MAP */}
        <div className={styles.contactInfo}>
          <div className={styles.mapCard}>
            <div className={styles.mapWrapper}>
              <a href={KAKUMA_MAP_LINK} target="_blank" rel="noreferrer noopener">
                <img
                  src={KAKUMA_MAP_IMAGE}
                  alt="Kakuma Refugee Camp location map"
                  className={styles.mapImage}
                />
              </a>
            </div>

            <div className={styles.officeDetails}>
              <h3>Spring Hope Organization</h3>

              <div className={styles.detail}>
                <span>📍</span>
                <p>Kakuma Refugee Camp, Turkana County, Kenya</p>
              </div>

              <div className={styles.detail}>
                <span>📞</span>
                <p>+254 700 000 000</p>
              </div>

              <div className={styles.detail}>
                <span>✉️</span>
                <p>info@springhope.org</p>
              </div>

              <div className={styles.detail}>
                <span>🕒</span>
                <p>Mon - Fri | 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.contactFormCard}>
          <div className={styles.formHeader}>
            <span className={styles.badge}>CONTACT US</span>
            <h2>Get In Touch</h2>
            <p>
              Send us a message and our team will respond as soon as possible.
            </p>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="contact-first-name">First Name *</label>
              <input
                id="contact-first-name"
                name="fname"
                autoComplete="given-name"
                value={form.fname}
                onChange={update("fname")}
                placeholder="John"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-last-name">Last Name</label>
              <input
                id="contact-last-name"
                name="lname"
                autoComplete="family-name"
                value={form.lname}
                onChange={update("lname")}
                placeholder="Doe"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-email">Email *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              placeholder="john@example.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-phone">Phone</label>
            <input
              id="contact-phone"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+254 700 000 000"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={update("subject")}
            >
              <option value="">Select Subject</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact-message">Message *</label>
            <textarea
              id="contact-message"
              name="message"
              autoComplete="off"
              onChange={update("message")}
              placeholder="Write your message..."
            />
          </div>

          <button
            className={styles.submitBtn}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <div className={styles.successMessage}>
              Message sent successfully 🎉
            </div>
          )}
        </div>
      </div>
    </section>
  );
}