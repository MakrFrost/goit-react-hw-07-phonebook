import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';
import { useFetchContactsQuery } from '../redux/contactsApi';
import Loader from '../Loader/Loader';

function Contacts() {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <ul>
      {isFetching && <Loader width={'20px'} />}
      {data && <ContactItem data={data} />}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
