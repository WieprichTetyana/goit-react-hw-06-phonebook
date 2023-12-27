import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../../redux/phonebookSlice';
import {
  StyledContactItem,
  StyledSpan,
  StyledBtn,
} from './ContactListItem.styled';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return getFilteredContacts().map(item => (
    <StyledContactItem key={item.id}>
      <p>
        <StyledSpan>{item.name}:</StyledSpan> {item.number}
      </p>
      <StyledBtn onClick={() => dispatch(deleteContactAction(item.id))}>
        Delete
      </StyledBtn>
    </StyledContactItem>
  ));
};
