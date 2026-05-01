import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { contactContent, contactLinks } from "../../data/contactContent.js";

const REGEX = {
  name: /^[a-zA-ZÀ-ÿ\s]{3,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  message: /^[\s\S]{10,}$/,
};

const ERROR_MESSAGES = {
  ES: {
    name: "Mínimo 3 letras. Solo se permiten letras y espacios.",
    email: "Ingresa un email válido. Ej: nombre@dominio.com",
    message: "El mensaje debe tener al menos 10 caracteres.",
  },
  EN: {
    name: "At least 3 letters. Only letters and spaces are allowed.",
    email: "Enter a valid email. E.g.: name@domain.com",
    message: "Message must be at least 10 characters.",
  },
};

const Contact = ({ lang = "ES" }) => {
  const c = contactContent[lang];
  const errors_i18n = ERROR_MESSAGES[lang];

  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (field, value) => {
    if (!REGEX[field].test(value.trim())) {
      return errors_i18n[field];
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = { name: true, email: true, message: true };
    const allErrors = {
      name: validate("name", values.name),
      email: validate("email", values.email),
      message: validate("message", values.message),
    };

    setTouched(allTouched);
    setErrors(allErrors);

    const hasErrors = Object.values(allErrors).some(Boolean);
    if (hasErrors) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_ug0e198",
        "template_ha3ky01",
        e.target,
        "f4xAe9L7K4CDBR3Yu"
      )
      .then(() => {
        setStatus("success");
        setValues({ name: "", email: "", message: "" });
        setTouched({});
        setErrors({});
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  const getFieldClass = (field) => {
    if (!touched[field]) return "";
    return errors[field] ? "input--error" : "input--valid";
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">

        <div className="contact-left reveal reveal--left">
          <div className="contact-heading">
            <span className="section-label">{c.label}</span>
            <h2 className="contact-title">{c.title}</h2>
            {c.subtitle && (
              <p className="contact-subtitle">{c.subtitle}</p>
            )}
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
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="name">{c.form.name}</label>
              <input
                id="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={c.form.name}
                className={getFieldClass("name")}
                aria-describedby={errors.name ? "error-name" : undefined}
                aria-invalid={!!errors.name}
              />
              {touched.name && errors.name && (
                <span className="field-error" id="error-name" role="alert">
                  {errors.name}
                </span>
              )}
              {touched.name && !errors.name && (
                <span className="field-valid" aria-hidden="true">✓</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">{c.form.email}</label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={c.form.email}
                className={getFieldClass("email")}
                aria-describedby={errors.email ? "error-email" : undefined}
                aria-invalid={!!errors.email}
              />
              {touched.email && errors.email && (
                <span className="field-error" id="error-email" role="alert">
                  {errors.email}
                </span>
              )}
              {touched.email && !errors.email && (
                <span className="field-valid" aria-hidden="true">✓</span>
              )}
            </div>

            {/* Mensaje */}
            <div className="form-group">
              <label htmlFor="message">{c.form.message}</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                placeholder={c.form.message}
                className={getFieldClass("message")}
                aria-describedby={errors.message ? "error-message" : undefined}
                aria-invalid={!!errors.message}
              />
              {touched.message && errors.message && (
                <span className="field-error" id="error-message" role="alert">
                  {errors.message}
                </span>
              )}
              {touched.message && !errors.message && (
                <span className="field-valid" aria-hidden="true">✓</span>
              )}
            </div>

            {status === "success" && (
              <p className="form-success" role="status">{c.form.success}</p>
            )}
            {status === "error" && (
              <p className="form-error" role="alert">{c.form.error}</p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? c.form.sending : c.form.send}
              {status !== "sending" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
