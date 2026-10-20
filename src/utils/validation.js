
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
// letters (including accents), spaces, hyphens and apostrophes
const NAME_PATTERN = /^[A-Za-zÀ-ÿ' -]+$/;

export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 500;

export function validateContactForm(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = 'Please enter your full name.';
  } else if (name.length < 2) {
    errors.name = 'Your name must be at least 2 characters long.';
  } else if (!NAME_PATTERN.test(name)) {
    errors.name = 'Your name can only contain letters, spaces, hyphens and apostrophes.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address, for example name@example.com.';
  }

  if (!message) {
    errors.message = 'Please enter your message.';
  } else if (message.length < MESSAGE_MIN) {
    errors.message = `Your message must be at least ${MESSAGE_MIN} characters long.`;
  } else if (message.length > MESSAGE_MAX) {
    errors.message = `Your message can be at most ${MESSAGE_MAX} characters long.`;
  }

  return errors;
}
