import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeItemContact,
  getContacts,
  getFilter,
} from '../Redux/PhonebookSlice';
import css from './Contacts.module.css';

const Contacts = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={css.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => dispatch(removeItemContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
