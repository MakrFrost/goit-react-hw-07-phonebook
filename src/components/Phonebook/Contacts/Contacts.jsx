import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useFetchContactsQuery } from '../redux/contactsApi';
import ContactItem from '../ContactItem/ContactItem';
import Loader from '../Loader/Loader';

function Contacts() {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter.query);
  const filteredContacts = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {data.length === 0 && <p>Sorry, You don't have contacts :(</p>}
      {data &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      {isFetching && <Loader width={'40px'} />}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
