import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/api';
import { toast } from 'react-toastify';
import { notifyOptions } from 'components/Notification/notifyOptions';
import { getVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const handleDeleteContact = contact => {
    dispatch(deleteContact(contact.id));

    toast.info(
      `Contact with with name ${contact.name} has been deleted!`,
      notifyOptions
    );
  };

  return (
    <ContactsList>
      {contacts?.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <DeleteButton
            type="button"
            onClick={() => handleDeleteContact({ id, name })}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
