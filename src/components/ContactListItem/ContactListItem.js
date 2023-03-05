import { DeleteButton } from 'components/ContactList/ContactList.styled';
import { deleteContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, phone } = data;
  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </DeleteButton>
    </>
  );
};
