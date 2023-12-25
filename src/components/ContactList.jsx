import React, { Component } from 'react';
import { ContactListItem } from './ContactListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: auto;
  border: 3px solid lightblue;
  background-color: #71b4f7;
  box-shadow: 3px 4px 7px 3px lightgray;
  padding: 0;
  border-radius: 12px;
  list-style-type: none;
`;

export class ContactList extends Component {
  render() {
    const filteredContacts = this.props.getFilteredContacts();
    return (
      <StyledList>
        <ContactListItem
          filteredContacts={filteredContacts}
          onDeleteContact={this.props.onDeleteContact}
        />
      </StyledList>
    );
  }
}
