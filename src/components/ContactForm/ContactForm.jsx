import {
  Form,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setName, setNumber } from 'redux/phonebookReducer';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/notifyOptions';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const name = useSelector(state => state.phonebook.name);
  const number = useSelector(state => state.phonebook.number);
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        dispatch(setName(value));
        break;
      case 'number':
        dispatch(setNumber(value));
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    handleAddContact(contact);

    reset(name, number);
  };

  const handleAddContact = contact => {
    const existingContacts = checkNewContactData(name);

    if (existingContacts) {
      return toast.error(
        `Contact with name "${name}" already exists!`,
        notifyOptions
      );
    }

    dispatch(setContacts(contact));
    toast.success(
      `Contact with name ${contact.name} is added to the contact list!`,
      notifyOptions
    );
  };

  const checkNewContactData = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };
  const reset = (name, number) => {
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
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
          id="number"
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
