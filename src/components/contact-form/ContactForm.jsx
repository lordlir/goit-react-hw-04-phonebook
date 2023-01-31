import React from 'react';
import PropTypes from 'prop-types';

import s from './contact-form.module.css';
import { useState } from 'react';

export const ContactForm = ({ onAddContact }) => {
  const [objContact, setObjContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;

    setObjContact(prevObj => {
      return { ...prevObj, [name]: value };
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = objContact;
    onAddContact(name, number);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="name">
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={objContact.name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label} htmlFor="name">
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={objContact.number}
          onChange={handleChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propType = {
  onAddContact: PropTypes.func.isRequired,
};
