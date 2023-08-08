// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { nanoid } from 'nanoid';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Section } from 'components/Section/Section';
// import { Container } from './App.styled';

// import { notifyOptions } from 'components/notifyOptions';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, setContacts, setFilter } from 'redux/phonebookReducer';

// export const App = () => {
//   const contacts = useSelector(state => state.phonebook.contacts);
//   const filter = useSelector(state => state.phonebook.filter);
//   const dispatch = useDispatch();

//   const handleAddContact = (name, number) => {
//     const existingContacts = checkNewContactData(name);

//     if (existingContacts) {
//       return toast.error(
//         `Contact with name "${name}" already exists!`,
//         notifyOptions
//       );
//     }

//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     dispatch(setContacts(contact));
//     toast.success(
//       `Contact with name ${contact.name} is added to the contact list!`,
//       notifyOptions
//     );
//   };

//   const handleFilterChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//     toast.info(
//       `Contact with with name ${contactId.name} has been deleted!`,
//       notifyOptions
//     );
//   };

//   const checkNewContactData = name => {
//     return contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   return (
//     <Container>
//       <Section title="Phonebook">
//         <ContactForm onSubmit={handleAddContact} />
//       </Section>
//       <ToastContainer />
//       <Section title="Contacts">
//         <Filter
//           title="Find contact by name"
//           onChange={handleFilterChange}
//           value={filter}
//         />
//         <ContactList
//           contacts={getFilteredContacts()}
//           onDeleteContact={handleDeleteContact}
//         />
//       </Section>
//       <ToastContainer />
//     </Container>
//   );
// };
