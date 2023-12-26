import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from '../../redux/phonebookSlice';
import {
  StyledContactItem,
  StyledSpan,
  StyledBtn,
} from './ContactListItem.styled';

export const ContactListItem = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.phonebook.filter);
  const contacts = useSelector(state => state.phonebook.contacts);

  const getFilteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  /* const filteredContacts = useMemo(() => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]); */

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
