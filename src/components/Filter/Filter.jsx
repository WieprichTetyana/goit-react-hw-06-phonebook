import { setFilterAction } from '../../redux/phonebookSlice';
import { FilterLabel, FilterWrapper, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        onChange={e => dispatch(setFilterAction(e.target.value))}
      />
    </FilterWrapper>
  );
};
