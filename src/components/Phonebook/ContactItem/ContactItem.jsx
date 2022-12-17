import { toast } from 'react-toastify';

import { useDeleteContactMutation } from '../redux/contactsApi';
import Loader from '../Loader/Loader';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <li id={id} className={css.item}>
        <b>{name}</b>
        <i>{number}</i>
        <button
          disabled={isDeleting}
          onClick={() => {
            deleteContact(id);
            toast.error(`You removed "${name}" from your contacts!`);
          }}
        >
          {isDeleting ? <Loader width={'12px'} /> : <>Delete contact</>}
        </button>
      </li>
    </>
  );
}
