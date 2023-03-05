import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import shortid from 'shortid';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import {
  Form,
  FormInput,
  FormLabel,
  FormAddButton,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChange}
        />
      </FormLabel>
      <FormAddButton type="submit">Add contact</FormAddButton>
    </Form>
  );
};
