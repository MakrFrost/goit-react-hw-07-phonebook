import { useFetchContactsQuery } from './redux/contactsApi';

// import Form from './Form/Form';
// import Filter from './Filter/Filter';
// import Contacts from './Contacts/Contacts';
// import Section from './Section/Section';

function Phonebook() {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  // const onFilterChange = value => {
  //   setFilter(value);
  // };
  // const onAddContact = contact => {
  //   if (contacts.filter(({ name }) => name === contact.name).length !== 0) {
  //     alert(contact.name + 'is already in contacts!');
  //     return;
  //   }

  //   const newContact = {
  //     ...contact,
  //   };
  //   setContacts([newContact, ...contacts]);
  // };
  // const onDeleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };
  // const filteredContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const { data, isLoading } = useFetchContactsQuery();
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <p>ничего не нашли, извините</p>
      ) : (
        <p>ваша записная книга</p>
      )}

      {/* <Section title={'Add contact to phonebook!'}>
        <Form />
      </Section>
      <Section title={'Contacts:'}>
        <Filter />
        <Contacts />
      </Section> */}
    </div>
  );
}

export default Phonebook;
