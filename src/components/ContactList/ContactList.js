import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { List, Item } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <List>
        {contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <ContactItem id={contact.id} data={contact} />
            </Item>
          );
        })}
      </List>
    </>
  );
};
