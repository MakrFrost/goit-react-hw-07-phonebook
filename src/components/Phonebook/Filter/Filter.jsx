import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filteredContact } from '../Redux/PhonebookSlice';

// css

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Find contacts by Name:
        <input
          type="text"
          value={filter}
          onChange={event => dispatch(filteredContact(event.target.value))}
        />
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
