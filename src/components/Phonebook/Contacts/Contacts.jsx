import React from 'react';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from './redux/contactsApi';

import css from './Contacts.module.css';

function Contacts() {
  const { data } = useFetchContactsQuery();
  console.log(data);

  return (
    <ul>
      {/* {contacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={css.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))} */}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
