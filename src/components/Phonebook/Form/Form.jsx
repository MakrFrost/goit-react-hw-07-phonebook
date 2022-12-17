import { useState } from 'react';
// import { nanoid } from 'nanoid';

import { useAddContactMutation } from '../redux/contactsApi';
import css from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();
  // {isLoading};

  const inputChange = evt => {
    const inputName = evt.target.name;

    switch (inputName) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };
  const clearForm = () => {
    setName('');
    setNumber('');
  };
  const onFormSubmit = async evt => {
    evt.preventDefault();
    setName(name);
    setNumber(number);

    if (name && number) {
      await addContact({ name: name, number: number }).unwrap();
    }
    clearForm();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className={css.form}>
        <label className={css.label__name}>
          Name:
          <input
            value={name}
            onChange={inputChange}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label__number}>
          Number:
          <input
            value={number}
            onChange={inputChange}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact!</button>
      </form>
    </div>
  );
}

export default Form;
