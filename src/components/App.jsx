import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  display: block;
  max-width: 450px;
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  background-color: #f6f2f2;
  box-shadow: 3px 4px 7px 3px lightgray;
`;
const StyledText = styled.p`
  opacity: 0.6;
  font-size: 16px;
`;

const StyledTitle = styled.h1`
  font-style: oblique;
  font-size: 30px;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;

const StyledHeading = styled.h2`
  font-style: oblique;
  text-transform: uppercase;
  text-shadow: -4px 4px 8px rgba(21, 31, 144, 0.6);
`;

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = contactData => {
    const { name, number } = contactData;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = { name, number, id: nanoid() };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm onSubmit={createContact} />
      <StyledHeading>Contacts</StyledHeading>
      {contacts.length ? (
        <div>
          <Filter handleFilter={handleFilter} />
          <ContactList
            getFilteredContacts={getFilteredContacts}
            onDeleteContact={handleDeleteContact}
          ></ContactList>
        </div>
      ) : (
        <StyledText>
          You don't have any contacts in your phonebook yet.
        </StyledText>
      )}
    </Container>
  );
};
