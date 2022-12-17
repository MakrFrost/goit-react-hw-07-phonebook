import { useFetchContactsQuery } from './redux/contactsApi';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Loader from './Loader/Loader';

function Phonebook() {
  const { isLoading } = useFetchContactsQuery();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Section title={'Add contact to phonebook!'}>
          <Form />
          <Section title={'Contacts:'} />
          <Filter />
          <Contacts />
        </Section>
      )}
    </div>
  );
}

export default Phonebook;
