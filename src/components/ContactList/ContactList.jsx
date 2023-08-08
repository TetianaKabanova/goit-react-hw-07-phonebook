import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookReducer';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/notifyOptions';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handleDeleteContact = (id, name) => {
    dispatch(deleteContact(id, name));
    toast.info(
      `Contact with with name ${name} has been deleted!`,
      notifyOptions
    );
  };

  return (
    <ContactsList>
      {getFilteredContacts()?.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <DeleteButton onClick={() => handleDeleteContact(id, name)}>
              Delete
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};
