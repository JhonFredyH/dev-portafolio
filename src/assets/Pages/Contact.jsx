import { useState } from "react";
import "./Contact.css";
import { contactContent, contactLinks } from "../../data/contactContent.js";

const Contact = ({ lang = "ES" }) => {
  const c = contactContent[lang];
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/TU_ID_AQUI", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">
        <div className="contact-left reveal reveal--left">
          <div className="contact-heading">
            <span className="section-label">{c.label}</span>
            <h2 className="contact-title">{c.title}</h2>
          </div>

          <div className="contact-links">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-link-icon">
                    <Icon size={22} />
                  </span>
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact-right reveal reveal--right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{c.form.name}</label>
              <input
                type="text"
                name="name"
                required
                placeholder={c.form.name}
              />
            </div>

            <div className="form-group">
              <label>{c.form.email}</label>
              <input
                type="email"
                name="email"
                required
                placeholder={c.form.email}
              />
            </div>

            <div className="form-group">
              <label>{c.form.message}</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={c.form.message}
              />
            </div>

            {status === "success" && (
              <p className="form-success">{c.form.success}</p>
            )}
            {status === "error" && <p className="form-error">{c.form.error}</p>}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? c.form.sending : c.form.send}
              {status !== "sending" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
