import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phonebookReducer';
import { selectFilter } from 'redux/selectors';

export const Filter = ({ title }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <FilterLabel>{title}</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Type a name to search"
      />
    </FilterWrap>
  );
};
