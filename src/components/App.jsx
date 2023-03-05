import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle, PhonebookTitle, ContactsTitle } from './GlobalStyles';
import { Box } from 'components/Box';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="section"
      mx="auto"
      my="150px"
      width="400px"
      p={5}
      bg="yellow"
      border="normal"
      borderRadius="normal"
      borderColor="black"
      boxShadow="regular"
    >
      <Box as="div" mb={5}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </Box>
      <Box as="div">
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && !error && <p>Request is loading...</p>}
        <ContactList />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
