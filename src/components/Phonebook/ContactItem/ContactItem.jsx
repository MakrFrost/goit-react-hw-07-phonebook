import { toast } from 'react-toastify';

import { useDeleteContactMutation } from '../redux/contactsApi';
// import Loader from '../Loader/Loader';
import css from './ContactItem.module.css';

export default function ContactItem({ data }) {
  const [deleteContact] = useDeleteContactMutation();
  // { isLoading: isDeleting }
  return (
    <>
      {data.map(({ id, name, number }) => (
        <li key={id} id={id} className={css.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            // disabled={isDeleting.data}
            onClick={() => {
              deleteContact(id);
              toast.error(`You removed "${name}" from your contacts!`);
            }}
          >
            Delete contact
            {/* {isDeleting ? <Loader width={'12px'} /> : null} */}
          </button>
        </li>
      ))}
    </>
  );
}
