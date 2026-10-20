import { useState } from 'react';
import FormField from './FormField.jsx';
import { validateContactForm, MESSAGE_MAX } from '../utils/validation.js';

const emptyForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  // useState: form input values, validation errors and submission feedback
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    setSubmitted(false);
    // After a failed attempt, update the errors as the visitor fixes them
    if (Object.keys(errors).length > 0) setErrors(validateContactForm(next));
  }

  function handleSubmit(e) {
    e.preventDefault(); // never reload the page / send to a server

    const found = validateContactForm(values);
    setErrors(found);

    // Validation failed: stop here so the form is not submitted
    if (Object.keys(found).length > 0) return;

    // Validation passed: show success and clear the form
    setSubmitted(true);
    setValues(emptyForm);
  }

  function inputProps(name) {
    return {
      id: `contact-${name}`,
      name,
      value: values[name],
      onChange: handleChange,
      required: true,
      'aria-invalid': errors[name] ? 'true' : 'false',
      'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    };
  }

  return (
    <form className="card contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Send us a message</h2>

      {submitted && (
        <div className="success" role="status">
          Thanks! Your message has been sent. We will reply within 2 working days.
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="form-alert" role="alert">
          Please fix the errors below before sending.
        </div>
      )}

      <FormField id="contact-name" label="Full name" required error={errors.name}>
        <input type="text" autoComplete="name" {...inputProps('name')} />
      </FormField>

      <FormField id="contact-email" label="Email address" required error={errors.email}>
        <input type="email" autoComplete="email" {...inputProps('email')} />
      </FormField>

      <FormField id="contact-message" label="Message" required error={errors.message}>
        <textarea rows="5" maxLength={MESSAGE_MAX} {...inputProps('message')} />
        <small className="char-count">
          {values.message.length} / {MESSAGE_MAX} characters
        </small>
      </FormField>

      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  );
}
