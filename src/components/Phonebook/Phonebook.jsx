// import { useState, useEffect } from 'react';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';

function Phonebook() {
  return (
    <div>
      <Section title={'Add contact to phonebook!'}>
        <Form />
      </Section>
      <Section title={'Contacts:'}>
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
}

export default Phonebook;
