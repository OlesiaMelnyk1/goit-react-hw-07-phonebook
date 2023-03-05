import { DeleteButton } from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </>
  );
};
