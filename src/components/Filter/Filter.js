import { setFilterValue } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { Input, Label } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        required
        onChange={event => dispatch(setFilterValue(event.target.value))}
      />
    </Label>
  );
};
