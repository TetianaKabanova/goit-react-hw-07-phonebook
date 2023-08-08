import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        <Filter title="Find contact by name" />
        <ContactList />
      </Section>
      <ToastContainer />
    </Container>
  );
};
