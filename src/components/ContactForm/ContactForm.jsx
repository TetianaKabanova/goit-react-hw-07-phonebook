import {
  Form,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { notifyOptions } from 'components/Notification/notifyOptions';
import { nanoid } from 'nanoid';
import { addContact, getContacts } from 'redux/api';
import { getVisibleContacts } from 'redux/selectors';
import { useEffect, useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (existingContact) {
      toast.error(`Contact with name "${name}" already exists!`, notifyOptions);
      reset();
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
    toast.success(
      `Contact with name ${name} is added to the contact list!`,
      notifyOptions
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Wrapper>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
