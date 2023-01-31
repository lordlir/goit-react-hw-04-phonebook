import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { ContactForm } from './contact-form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contact-list/ContactList';

import s from './app.module.css';

export const arrOfContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const LS_KEY = 'contacts';
const dataStorege = JSON.parse(localStorage.getItem(LS_KEY));

export const App = () => {
  const [contacts, setContact] = useState(dataStorege ?? arrOfContacts);
  const [filter, setFilter] = useState('');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filtredContsacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const addContact = (name, number) => {
    const searchSameName = contacts.find(contact => contact.name === name);
    if (searchSameName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name,
        number,
        id: uuidv4(),
      };

      setContact(prevContacts => [...prevContacts, contact]);
    }
  };

  const deleteContacts = id => {
    setContact(prevContact => prevContact.filter(contact => contact.id !== id));
  };

  useEffect(
    prevContacts => {
      if (prevContacts !== contacts) {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts));
      }
    },
    [contacts]
  );

  const contactsFiltred = filtredContsacts();

  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm onAddContact={addContact} />
      <h2 className={s.title}>Contact</h2>
      <Filter filter={filter} onFilterChanche={handleFilterChange} />
      <ContactList
        contactsFiltred={contactsFiltred}
        onDelContact={deleteContacts}
      />
    </>
  );
};
