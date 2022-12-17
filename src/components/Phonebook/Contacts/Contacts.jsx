import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../redux/contactsApi';
import css from './Contacts.module.css';

function Contacts() {
  const { data } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async id => {
    await deleteContact(id).unwrap();
  };

  return (
    <ul>
      {data.map(({ id, name, number }) => (
        <li key={id} id={id} className={css.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            onClick={() => {
              handleDeleteContact(id);
              toast.error(`You removed ${name} from your contacts!`);
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
