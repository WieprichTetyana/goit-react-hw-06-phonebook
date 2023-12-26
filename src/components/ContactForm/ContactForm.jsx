import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledListItem,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { createContactAction } from '../../redux/phonebookSlice';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const createContact = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    /* for (let item of contacts) {
      if (item.name === e.target.elements.name.value) {
        alert(`${item.name} is already in contacts.`);
        e.currentTarget.reset();
        return; */

    const isContactExists = contacts.find(contact => contact.name === name);
    if (isContactExists) {
      alert(`${name} is already in contacts.`);
      e.currentTarget.reset();
      return;
    }

    dispatch(createContactAction(newContact));
    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={createContact}>
      <ul>
        <StyledListItem>
          <StyledLabel htmlFor="name">Name </StyledLabel>
          <StyledInput type="text" name="name" id="name" required />
        </StyledListItem>
        <StyledListItem>
          <StyledLabel htmlFor="number">Number </StyledLabel>
          <StyledInput type="tel" name="number" id="number" required />
        </StyledListItem>
      </ul>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};
