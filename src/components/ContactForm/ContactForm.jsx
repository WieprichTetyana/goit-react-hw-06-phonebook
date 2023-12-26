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

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);

  const createContact = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    for (let item of contacts) {
      if (item.name === e.target.elements.name.value) {
        alert(`${item.name} is already in contacts.`);
        e.currentTarget.reset();
        return;
      }
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
